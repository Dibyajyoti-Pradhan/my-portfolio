import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "styled-components";
import styled, { keyframes, css } from "styled-components";
import { skills as defaultSkills } from "../data/data";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { fadeInUp } from "../styles/animations";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-14px); }
  to   { opacity: 1; transform: translateX(0);   }
`;

const SkillsSection = styled.section`
  max-width: 900px;
  margin: 128px auto 0;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto 0;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 56px;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeInUp} 0.5s ease forwards` : "none"};

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .num {
      font-size: 11px;
      font-family: ${({ theme }) => theme.fonts.mono};
      color: ${({ theme }) => theme.colors.textTertiary};
      font-weight: 600;
      letter-spacing: 0.1em;
    }

    .line {
      width: 32px;
      height: 1px;
      background: ${({ theme }) => theme.colors.divider};
      border-radius: 1px;
    }
  }

  h2 {
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 900;
    letter-spacing: -0.045em;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1;
    margin-bottom: 12px;
  }

  .subtitle {
    font-size: 13px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.02em;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const CategoryRow = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 20px;
  align-items: start;
  padding: 18px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  opacity: 0;
  animation: ${({ $visible }) =>
    $visible
      ? css`${slideIn} 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards`
      : "none"};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.divider};
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .category-label {
    font-size: 10px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
    padding-top: 6px;
    line-height: 1.4;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
`;

const DraggableSkill = ({
  skill,
  listeners,
  attributes,
  isDragging,
  style,
  refCallback,
  selected,
  onClick,
  hovered,
  onMouseEnter,
  onMouseLeave,
  primaryColor,
  accentBg,
  textColor,
  dividerColor,
}) => (
  <span
    ref={refCallback}
    {...listeners}
    {...attributes}
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "5px 12px",
      borderRadius: "6px",
      fontSize: "12.5px",
      fontFamily: "var(--font-mono, monospace)",
      fontWeight: 500,
      letterSpacing: "-0.005em",
      position: "relative",
      cursor: "grab",
      userSelect: "none",
      transition: "all 0.15s cubic-bezier(0.25, 0.1, 0.25, 1)",
      background: selected || hovered
        ? `${primaryColor}10`
        : accentBg,
      color: selected || hovered ? primaryColor : textColor,
      border: `1px solid ${selected || hovered ? `${primaryColor}35` : dividerColor}`,
      boxShadow: selected || hovered
        ? `0 2px 12px ${primaryColor}18`
        : "none",
      opacity: isDragging ? 0.4 : 1,
      transform: isDragging
        ? "scale(1.06) rotate(1.5deg)"
        : hovered
        ? "translateY(-1px)"
        : "none",
      zIndex: isDragging ? 10 : "auto",
      ...style,
    }}
    tabIndex={0}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {skill}
  </span>
);

function SortableSkill({
  id,
  skill,
  selected,
  onClick,
  hovered,
  onMouseEnter,
  onMouseLeave,
  primaryColor,
  accentBg,
  textColor,
  dividerColor,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <DraggableSkill
      id={id}
      skill={skill}
      listeners={listeners}
      attributes={attributes}
      isDragging={isDragging}
      style={style}
      refCallback={setNodeRef}
      selected={selected}
      onClick={onClick}
      hovered={hovered}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      primaryColor={primaryColor}
      accentBg={accentBg}
      textColor={textColor}
      dividerColor={dividerColor}
    />
  );
}

const LOCAL_STORAGE_KEY = "skills-order-v1";

const Skills = () => {
  const [skills, setSkills] = useState(() => {
    const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {
        return defaultSkills;
      }
    }
    return defaultSkills;
  });

  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const themeStyles = useTheme();
  const skillsSectionRef = useRef();

  const primaryColor = themeStyles.colors.primary;
  const accentBg = themeStyles.colors.accent;
  const textColor = themeStyles.colors.textSecondary;
  const dividerColor = themeStyles.colors.cardBorder;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (skillsSectionRef.current) observer.observe(skillsSectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        skillsSectionRef.current &&
        !skillsSectionRef.current.contains(e.target)
      ) {
        setSelectedSkill(null);
      } else if (skillsSectionRef.current && e.target.tagName !== "SPAN") {
        setSelectedSkill(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
  );

  const handleDragEnd = (event, catIdx) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setSkills((prev) => {
      const newSkills = [...prev];
      const items = [...newSkills[catIdx].items];
      const oldIdx = items.findIndex((s) => s === active.id);
      const newIdx = items.findIndex((s) => s === over.id);
      if (oldIdx === -1 || newIdx === -1) return prev;
      newSkills[catIdx].items = arrayMove(items, oldIdx, newIdx);
      return newSkills;
    });
  };

  return (
    <SkillsSection id="skills" ref={skillsSectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">04</span>
          <div className="line" />
        </div>
        <h2>Skills</h2>
        <p className="subtitle">drag to reorder · click to highlight</p>
      </SectionHeader>

      <SkillsGrid>
        {skills.map((skillGroup, catIdx) => (
          <CategoryRow
            key={skillGroup.category}
            $visible={isVisible}
            style={{ animationDelay: `${0.12 + catIdx * 0.06}s` }}
          >
            <div className="category-label">{skillGroup.category}</div>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(e) => handleDragEnd(e, catIdx)}
            >
              <SortableContext
                items={skillGroup.items}
                strategy={horizontalListSortingStrategy}
              >
                <div className="items">
                  {skillGroup.items.map((skill) => (
                    <SortableSkill
                      key={skill}
                      id={skill}
                      skill={skill}
                      selected={selectedSkill === skill}
                      onClick={() =>
                        setSelectedSkill(selectedSkill === skill ? null : skill)
                      }
                      hovered={hoveredSkill === skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      primaryColor={primaryColor}
                      accentBg={accentBg}
                      textColor={textColor}
                      dividerColor={dividerColor}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </CategoryRow>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
