// src/components/Education.js

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { education } from "../data/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import Card from "./common/Card";
import Button from "./common/Button";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const EducationSection = styled.section`
  max-width: 900px;
  margin: 140px auto;
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
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const EducationItem = styled(Card)`
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 20px;
  opacity: 0;
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${fadeInLeft} 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${$delay}s forwards`
      : "none"};

  /* Subtle gradient border on left */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 10%;
    width: 3px;
    height: 80%;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.colors.primary},
      transparent
    );
    border-radius: 0 3px 3px 0;
    opacity: 0;
    transform: scaleY(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
    transform-origin: center;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scaleY(1);
  }

  .left-column {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    transition: color 0.3s ease;
  }

  &:hover .left-column {
    color: ${({ theme }) => theme.colors.primary};
  }

  .right-column {
    .title-school {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;

      .degree {
        font-size: 22px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
        transition: color 0.3s ease;
      }

      .school {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;

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

    &:hover .title-school .school {
      transform: translateX(5px);
    }

    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      margin-bottom: 10px;

      svg {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primary};
        transition: transform 0.3s ease;
      }
    }

    &:hover .location svg {
      transform: scale(1.2);
    }

    .details {
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;

      p {
        margin-bottom: 10px;
        max-width: 800px;
      }
    }
  }
`;

const Education = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const educationToShow = showMore ? education : education.slice(0, 1);

  return (
    <EducationSection id="education" ref={sectionRef} $isVisible={isVisible}>
      <h2>Education</h2>
      <EducationList>
        {educationToShow.map(
          ({ id, school, url, degree, duration, location, major, details }, index) => (
            <EducationItem
              key={id}
              tabIndex="0"
              $isVisible={isVisible}
              $delay={0.2 + index * 0.15}
              onClick={() => {
                window.open(url, "_blank", "noopener,noreferrer");
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  window.open(url, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="left-column">{duration}</div>
              <div className="right-column">
                <div className="title-school">
                  <div className="school">{school}</div>
                  <div className="degree">{degree}</div>
                </div>
                <div className="location">
                  <FaMapMarkerAlt />
                  <span>{location}</span>
                </div>
                <div className="details">
                  <p>{major}</p>
                  {details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </div>
            </EducationItem>
          )
        )}
      </EducationList>
      {education.length > 1 && (
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </EducationSection>
  );
};

export default Education;
