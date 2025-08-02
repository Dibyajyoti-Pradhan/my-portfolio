import React, { useEffect, useState, useContext, useRef } from "react";
import styled from "styled-components";
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

const SkillsSection = styled.section`
  max-width: 1100px;
  margin: 100px auto 0;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  .skills {
    .skill-category {
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;

      h3 {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        flex: 0.2;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
          flex: 0.3;
        }
      }

      .skill-items {
        display: flex;
        flex-direction: row;
        flex: 0.8;
        flex-wrap: wrap;
        gap: 15px;

        @media (max-width: 768px) {
          flex: 0.7;
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
}) => (
  <span
    ref={refCallback}
    {...listeners}
    {...attributes}
    style={{
      backgroundColor: "#112240",
      color: "#fff",
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
  const { theme } = useContext(ThemeContext);
  const skillsSectionRef = useRef();

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
    <SkillsSection id="skills" ref={skillsSectionRef}>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skillGroup, catIdx) => (
          <div className="skill-category" key={skillGroup.category}>
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
