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
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0);  }
`;

const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-18px); }
  to   { opacity: 1; transform: translateX(0);   }
`;

const SkillsSection = styled.section`
  max-width: 900px;
  margin: 160px auto 0;
  padding: 0 32px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  .section-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 14px;
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 500;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible ? css`${fadeInUp} 0.4s ease forwards` : "none"};

    &::before,
    &::after {
      content: '';
      flex: 1;
      max-width: 40px;
      height: 1px;
      background: ${({ theme }) => theme.colors.primary}60;
    }
  }

  h2 {
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 800;
    letter-spacing: -0.035em;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.05s forwards`
        : "none"};

    &::after {
      content: '';
      display: block;
      margin: 18px auto 0;
      width: 40px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
    }
  }

  .subtitle {
    text-align: center;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    margin-bottom: 72px;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible ? css`${fadeInUp} 0.4s ease 0.1s forwards` : "none"};
  }

  .skills {
    .skill-category {
      margin-bottom: 32px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 16px;
      opacity: 0;
      animation: ${({ $isVisible }) =>
        $isVisible
          ? css`${fadeInLeft} 0.45s cubic-bezier(0.4, 0, 0.2, 1) forwards`
          : "none"};

      @media (max-width: 600px) {
        flex-direction: column;
        gap: 12px;
      }

      h3 {
        font-size: 11px;
        font-family: ${({ theme }) => theme.fonts.mono};
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.textTertiary};
        flex: 0 0 120px;
        padding-top: 8px;
        line-height: 1.4;

        @media (max-width: 768px) {
          flex: 0 0 90px;
        }
      }

      .skill-items {
        display: flex;
        flex-direction: row;
        flex: 1;
        flex-wrap: wrap;
        gap: 8px;
      }
    }
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
}) => (
  <span
    ref={refCallback}
    {...listeners}
    {...attributes}
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 14px",
      borderRadius: "8px",
      fontSize: "13px",
      fontFamily: "var(--font-mono, monospace)",
      fontWeight: 500,
      letterSpacing: "-0.005em",
      position: "relative",
      cursor: "grab",
      userSelect: "none",
      transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
      background: selected || hovered
        ? `${primaryColor}12`
        : accentBg,
      color: selected || hovered ? primaryColor : textColor,
      border: `1px solid ${selected || hovered ? `${primaryColor}45` : `${primaryColor}15`}`,
      boxShadow: selected || hovered
        ? `0 4px 20px ${primaryColor}25`
        : "none",
      opacity: isDragging ? 0.5 : 1,
      transform: isDragging
        ? "scale(1.05) rotate(1deg)"
        : hovered
        ? "translateY(-2px)"
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
    <SkillsSection id="skills" ref={skillsSectionRef} $isVisible={isVisible}>
      <div className="section-label">02</div>
      <h2>Skills</h2>
      <p className="subtitle">drag to reorder · click to highlight</p>
      <div className="skills">
        {skills.map((skillGroup, catIdx) => (
          <div
            className="skill-category"
            key={skillGroup.category}
            style={{ animationDelay: `${0.15 + catIdx * 0.07}s` }}
          >
            <h3>{skillGroup.category}</h3>
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={(e) => handleDragEnd(e, catIdx)}
            >
              <SortableContext
                items={skillGroup.items}
                strategy={horizontalListSortingStrategy}
              >
                <div className="skill-items">
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
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </div>
        ))}
      </div>
    </SkillsSection>
  );
};

export default Skills;
