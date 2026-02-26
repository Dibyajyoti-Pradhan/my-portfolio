import React, { useEffect, useState, useContext, useRef } from "react";
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
import { ThemeContext } from "../context/ThemeContext";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SkillsSection = styled.section`
  max-width: 900px;
  margin: 140px auto 0;
  padding: 0 24px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 64px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`
        : "none"};

    @media (max-width: 768px) {
      font-size: 36px;
      margin-bottom: 48px;
    }
  }

  .skills {
    .skill-category {
      margin-bottom: 28px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      opacity: 0;
      animation: ${({ $isVisible }) =>
        $isVisible
          ? css`${fadeInLeft} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards`
          : "none"};

      h3 {
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.01em;
        color: ${({ theme }) => theme.colors.textSecondary || theme.colors.slate};
        flex: 0 0 140px;
        display: flex;
        align-items: center;
        padding-top: 10px;

        @media (max-width: 768px) {
          flex: 0 0 100px;
          font-size: 13px;
        }
      }

      .skill-items {
        display: flex;
        flex-direction: row;
        flex: 1;
        flex-wrap: wrap;
        gap: 12px;

        @media (max-width: 768px) {
          gap: 8px;
        }
    }
  }
`;

const DraggableSkill = ({
  id,
  skill,
  listeners,
  attributes,
  isDragging,
  style,
  refCallback,
  selected,
  onClick,
  glowColor,
  hovered,
  onMouseEnter,
  onMouseLeave,
  bgColor,
  textColor,
}) => (
  <span
    ref={refCallback}
    {...listeners}
    {...attributes}
    style={{
      backgroundColor: bgColor,
      color: textColor,
      padding: "10px 15px",
      borderRadius: "4px",
      fontSize: "14px",
      fontFamily: "monospace",
      position: "relative",
      transition: "all 0.2s",
      overflow: "hidden",
      cursor: "grab",
      outline: isDragging ? `2px solid ${glowColor}` : "none",
      opacity: isDragging ? 0.7 : 1,
      boxShadow:
        selected || hovered || isDragging
          ? `0 0 30px 8px ${glowColor}88`
          : "none",
      zIndex: selected ? 3 : 1,
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
  glowColor,
  bgColor,
  textColor,
  hovered,
  onMouseEnter,
  onMouseLeave,
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
    zIndex: isDragging ? 2 : 1,
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
      glowColor={glowColor}
      hovered={hovered}
      bgColor={bgColor}
      textColor={textColor}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
  const { theme } = useContext(ThemeContext);
  const themeStyles = useTheme();
  const chipBg = theme === "dark" ? "#112240" : themeStyles.colors.cardBackground || themeStyles.colors.secondary || "#e6f1ff";
  const chipText = theme === "dark" ? "#ffffff" : themeStyles.colors.text;
  const skillsSectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Save to localStorage whenever skills change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    const handleClick = (e) => {
      // Only deselect if the click is outside any .skill-items span
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
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  // Only allow reordering within a category
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

  const glowColor = theme === "dark" ? "#ffb86b" : "#007acc";

  return (
    <SkillsSection id="skills" ref={skillsSectionRef} $isVisible={isVisible}>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skillGroup, catIdx) => (
          <div
            className="skill-category"
            key={skillGroup.category}
            style={{ animationDelay: `${0.2 + catIdx * 0.1}s` }}
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
                      onClick={() => setSelectedSkill(skill)}
                      glowColor={glowColor}
                      bgColor={chipBg}
                      textColor={chipText}
                      hovered={hoveredSkill === skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
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
