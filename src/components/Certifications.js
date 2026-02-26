// src/components/Certifications.js

import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { certifications } from "../data/data";
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaGraduationCap, FaBookOpen, FaRocket, FaClock, FaAward } from "react-icons/fa";
import Card from "./common/Card";

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 140, 66, 0.4); }
  50% { box-shadow: 0 0 0 8px rgba(255, 140, 66, 0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
`;

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

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const drawLine = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const CertificationsSection = styled.section`
  max-width: 1100px;
  margin: 100px auto;
  padding: 0 20px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;

  h2 {
    font-size: 32px;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    position: relative;
    display: inline-block;
    width: 100%;
    opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
    animation: ${({ $isVisible }) =>
      $isVisible
        ? css`${fadeInUp} 0.6s ease forwards`
        : "none"};

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary}, transparent);
      animation: ${({ $isVisible }) =>
        $isVisible
          ? css`${drawLine} 0.8s ease 0.4s forwards`
          : "none"};
      transform-origin: center;
    }
  }
`;

const CertificationsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CertificationItem = styled(Card)`
  position: relative;
  overflow: visible;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  animation: ${({ $isVisible, $delay }) =>
    $isVisible
      ? css`${scaleIn} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}s forwards`
      : "none"};

  &::before {
    pointer-events: none;
  }
`;

const CertHeader = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.primary}40);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  animation: ${float} 3s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 22px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, transparent, ${({ theme }) => theme.colors.primary});
    z-index: -1;
    opacity: 0.5;
  }

  svg {
    font-size: 45px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CertTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  line-height: 1.3;
  margin: 0;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.linkHover});
  color: ${({ theme }) => theme.colors.background};
  border-radius: 25px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: ${pulse} 2s ease-in-out infinite;
  white-space: nowrap;

  svg {
    font-size: 12px;
  }
`;

const Institution = styled.a`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }

  svg {
    font-size: 12px;
  }
`;

const Department = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.slate};
  margin: 0;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  padding: 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.accent};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.slate};
  font-size: 14px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
  }
`;

const Outcome = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 15px 20px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}80, ${({ theme }) => theme.colors.accent}40);
  border-radius: 12px;
  margin-bottom: 20px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
`;

const TechPill = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.slate};
  padding: 6px 16px;
  border-radius: 25px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: default;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeInUp} 0.4s ease forwards;
  animation-delay: ${({ $index }) => 0.3 + ($index || 0) * 0.05}s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary}20,
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.greenTint};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.cardGlow};

    &::before {
      left: 100%;
    }
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LearnMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 14px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  transition: all 0.3s ease;
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.greenTint};
    transform: translateX(5px);
  }
`;

const ExpandButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}20, ${({ theme }) => theme.colors.primary}10);
  border: 1px solid ${({ theme }) => theme.colors.primary}50;
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.greenTint};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const ExpandableContent = styled.div`
  display: grid;
  grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? "1fr" : "0fr")};
  transition: grid-template-rows 0.4s ease-out;

  > div {
    overflow: hidden;
  }
`;

const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 25px 0 20px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
`;

const SectionTitle = styled.h4`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: 600;
`;

const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}50, transparent);
`;

const CurriculumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CurriculumItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: default;
  opacity: 0;
  animation: ${slideInRight} 0.5s ease forwards;
  animation-delay: ${({ $index }) => 0.1 + $index * 0.05}s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(8px);
    background: ${({ theme }) => theme.colors.greenTint};
    box-shadow: 0 4px 15px ${({ theme }) => theme.colors.cardGlow};
  }

  .number {
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    flex-shrink: 0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  &:hover .number {
    transform: scale(1.1);
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary}60;
  }

  .text {
    color: ${({ theme }) => theme.colors.slate};
    font-size: 14px;
    line-height: 1.4;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.a`
  position: relative;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 15px;
  padding: 25px;
  text-decoration: none;
  display: block;
  transition: all 0.4s ease;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.linkHover});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}05, ${({ theme }) => theme.colors.primary}10);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.cardGlow};

    &::before {
      transform: scaleX(1);
    }

    &::after {
      opacity: 1;
    }

    .project-icon {
      transform: rotate(360deg);
    }
  }

  .project-header {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-bottom: 12px;
  }

  .project-icon {
    width: 45px;
    height: 45px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 20px;
    }
  }

  .project-title {
    flex: 1;
    font-size: 17px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    line-height: 1.3;
    display: flex;
    align-items: center;
    gap: 8px;

    .link-icon {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 12px;
      opacity: 0.7;
    }
  }

  .project-description {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.slate};
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }
`;

const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null);
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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <CertificationsSection id="certifications" ref={sectionRef} $isVisible={isVisible}>
      <h2>Certifications</h2>
      <CertificationsList>
        {certifications.map((cert, index) => (
          <CertificationItem key={cert.id} tabIndex="0" $isVisible={isVisible} $delay={0.2 + index * 0.15}>
            <CertHeader>
              <LogoContainer>
                <FaGraduationCap />
              </LogoContainer>
              <HeaderContent>
                <TitleRow>
                  <CertTitle>{cert.title}</CertTitle>
                  <StatusBadge>
                    <FaClock /> {cert.status}
                  </StatusBadge>
                </TitleRow>
                <Institution href={cert.institutionUrl} target="_blank" rel="noopener noreferrer">
                  {cert.institution} <FaExternalLinkAlt />
                </Institution>
                <Department>{cert.department}</Department>
              </HeaderContent>
            </CertHeader>

            <MetaRow>
              <MetaItem>
                <FaMapMarkerAlt />
                <span>London</span>
              </MetaItem>
              <MetaItem>
                <FaClock />
                <span>{cert.duration}</span>
              </MetaItem>
              <MetaItem>
                <FaBookOpen />
                <span>{cert.date}</span>
              </MetaItem>
            </MetaRow>

            <Outcome>
              <FaAward />
              <span>{cert.outcome}</span>
            </Outcome>

            <TechStack>
              {cert.techStack.map((tech, index) => (
                <TechPill key={index} $index={index}>{tech}</TechPill>
              ))}
            </TechStack>

            <ActionRow>
              <LearnMoreLink href={cert.institutionUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Learn More
              </LearnMoreLink>
              <ExpandButton onClick={() => toggleExpand(cert.id)}>
                {expandedId === cert.id ? (
                  <>
                    Hide Details <FaChevronUp />
                  </>
                ) : (
                  <>
                    View Curriculum & Projects <FaChevronDown />
                  </>
                )}
              </ExpandButton>
            </ActionRow>

            <ExpandableContent $isExpanded={expandedId === cert.id}>
              <div>
              <SectionDivider>
                <FaBookOpen />
                <SectionTitle>Curriculum Overview</SectionTitle>
                <SectionLine />
              </SectionDivider>
              <CurriculumGrid>
                {cert.curriculum.map((item, index) => (
                  <CurriculumItem key={index} $index={index}>
                    <span className="number">{index + 1}</span>
                    <span className="text">{item}</span>
                  </CurriculumItem>
                ))}
              </CurriculumGrid>

              <SectionDivider>
                <FaRocket />
                <SectionTitle>Capstone Projects</SectionTitle>
                <SectionLine />
              </SectionDivider>
              <ProjectsGrid>
                {cert.capstoneProjects.map((project, index) => (
                  <ProjectCard key={index} href={project.url} target="_blank" rel="noopener noreferrer">
                    <div className="project-header">
                      <div className="project-icon">
                        <FaRocket />
                      </div>
                      <div className="project-title">
                        {project.title}
                        <FaExternalLinkAlt className="link-icon" />
                      </div>
                    </div>
                    <div className="project-description">{project.description}</div>
                  </ProjectCard>
                ))}
              </ProjectsGrid>
              </div>
            </ExpandableContent>
          </CertificationItem>
        ))}
      </CertificationsList>
    </CertificationsSection>
  );
};

export default Certifications;
