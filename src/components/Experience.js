import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { experiences } from "../data/data";
import { FaMapMarkerAlt } from "react-icons/fa";

const ExperienceSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${theme.colors.lightestSlate};
    text-align: center;
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const ExperienceItem = styled.div`
  background: rgba(17, 34, 64, 0.6); // Semi-transparent dark navy
  border-radius: 15px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
  tabindex: 0;

  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: radial-gradient(circle, rgba(100, 255, 218, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform: scale(0.9);
    filter: blur(30px);
  }

  &:hover,
  &:focus {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
    background: rgba(17, 34, 64, 0.8); // Slightly more opaque on hover

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  .left-column {
    font-size: 16px;
    color: ${theme.colors.slate};
    text-transform: uppercase;
    font-weight: bold;
  }

  .right-column {
    .title-company {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      .job-title {
        font-size: 22px;
        color: ${theme.colors.lightestSlate};
        font-weight: bold;
      }

      .company {
        font-size: 18px;
        color: ${theme.colors.green};
        display: flex;
        align-items: center;

        a {
          color: inherit;
          text-decoration: none;

          &:hover,
          &:focus {
            text-decoration: underline;
          }
        }
      }
    }

    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${theme.colors.slate};
      font-size: 16px;
      margin-bottom: 10px;

      svg {
        font-size: 18px;
      }
    }

    .responsibilities {
      color: ${theme.colors.lightSlate};
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        max-width: 800px;
      }
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;

      span {
        background-color: rgba(2, 12, 27, 0.7);
        color: ${theme.colors.lightestSlate};
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        font-family: ${theme.fonts.mono};
        transition: background-color 0.3s ease, transform 0.3s ease;
        outline: none;
        tabindex: 0;

        &:hover,
        &:focus {
          background-color: ${theme.colors.greenTint};
          transform: translateY(-3px);
        }
      }
    }
  }
`;

const ShowMoreButton = styled.button`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: ${theme.colors.green};
  background-color: transparent;
  border: 1px solid ${theme.colors.green};
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  transition: ${theme.transition};
  display: block;

  &:hover,
  &:focus {
    background-color: ${theme.colors.greenTint};
  }
`;

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const experiencesToShow = showAll ? experiences : experiences.slice(0, 3);

  return (
    <ExperienceSection id="experience">
      <h2>Work Experience</h2>
      <ExperienceList>
        {experiencesToShow.map(
          ({
            id,
            position,
            company,
            url,
            date,
            location,
            responsibilities,
            techStack,
          }) => (
            <ExperienceItem
              key={id}
              tabIndex="0"
              style={{ transition: "all 0.6s ease" }}
            >
              <div className="left-column">{date}</div>
              <div className="right-column">
                <div className="title-company">
                  <div
                    className="company"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex="0"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          window.open(url, "_blank", "noopener,noreferrer");
                        }
                      }}
                    >
                      {company}
                    </a>
                  </div>
                  <div className="job-title">{position}</div>
                </div>
                <div className="location">
                  <FaMapMarkerAlt />
                  <span>{location}</span>
                </div>
                <div className="responsibilities">
                  {responsibilities.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
                <div className="tech-stack">
                  {techStack.map((tech, idx) => (
                    <span key={idx} tabIndex="0">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ExperienceItem>
          )
        )}
      </ExperienceList>
      {experiences.length > 3 && (
        <ShowMoreButton
          onClick={handleShowMore}
          style={{ transition: "all 0.6s ease" }}
        >
          {showAll ? "Show Less" : "Show More"}
        </ShowMoreButton>
      )}
    </ExperienceSection>
  );
};

export default Experience;