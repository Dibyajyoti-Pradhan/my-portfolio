import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { certifications } from "../data/data";
import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBookOpen,
  FaRocket,
  FaClock,
  FaAward,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`;


const CertificationsSection = styled.section`
  max-width: 900px;
  margin: 128px auto;
  padding: 0 48px;

  @media (max-width: 900px) {
    padding: 0 24px;
    margin: 96px auto;
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

const CertCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadiusLarge};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  opacity: 0;
  will-change: transform, opacity;
  animation: ${({ $visible, $delay }) =>
    $visible ? css`${scaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${$delay}s forwards` : "none"};
  transition: border-color 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
  }
`;

const CardTop = styled.div`
  padding: 32px 36px 28px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.divider};
  }

  @media (max-width: 600px) {
    padding: 24px 20px 20px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

const CertTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.025em;
  line-height: 1.3;
  flex: 1;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: ${({ theme }) => theme.colors.primarySubtle};
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadiusPill};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  flex-shrink: 0;

  .status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const InstitutionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
  transition: all 0.15s ease;

  svg { font-size: 10px; opacity: 0.6; }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    svg { opacity: 1; }
  }
`;

const Department = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 20px;
  letter-spacing: 0.02em;
`;

const MetaStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 14px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 20px;
`;

const MetaChip = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.02em;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 11px;
    opacity: 0.7;
  }
`;

const OutcomeBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.primarySubtle};
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 20px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    flex-shrink: 0;
  }

  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: -0.005em;
    line-height: 1.5;
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textTertiary};
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 11.5px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: all 0.15s ease;
  cursor: default;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    background: ${({ theme }) => theme.colors.primarySubtle};
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  padding: 8px 14px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.accent};
  transition: all 0.18s ease;
  letter-spacing: -0.008em;

  svg { font-size: 10px; }

  &:hover {
    background: ${({ theme }) => theme.colors.primarySubtle};
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;

const ExpandToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px 14px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.main};
  transition: all 0.18s ease;
  letter-spacing: -0.008em;

  svg {
    font-size: 11px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primarySubtle};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExpandablePanel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.38s cubic-bezier(0.4, 0, 0.2, 1);

  > .inner { overflow: hidden; }
`;

const PanelBody = styled.div`
  padding: 0 36px 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: 600px) {
    padding: 0 20px 20px;
  }
`;

const PanelSection = styled.div`
  padding-top: 24px;
  margin-bottom: 24px;

  &:last-child { margin-bottom: 0; }

  .panel-heading {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 13px;
    }

    span {
      font-size: 13px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.text};
      letter-spacing: -0.01em;
    }

    .rule {
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.divider};
    }
  }
`;

const CurriculumList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 8px;
`;

const CurriculumItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 14px;
  background: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.18s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    background: ${({ theme }) => theme.colors.primarySubtle};
  }

  .step-num {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    font-family: ${({ theme }) => theme.fonts.mono};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .step-text {
    font-size: 12.5px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
    letter-spacing: -0.004em;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 10px;
`;

const CapstoneCard = styled.a`
  display: block;
  padding: 18px 20px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryBorder};
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    text-decoration: none;

    .proj-title { color: ${({ theme }) => theme.colors.primary}; }
  }

  .proj-icon {
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.primarySubtle};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
    }
  }

  .proj-title {
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.018em;
    line-height: 1.3;
    margin-bottom: 6px;
    transition: color 0.15s ease;
    display: flex;
    align-items: center;
    gap: 6px;

    svg {
      font-size: 10px;
      color: ${({ theme }) => theme.colors.textTertiary};
      flex-shrink: 0;
    }
  }

  .proj-desc {
    font-size: 12.5px;
    color: ${({ theme }) => theme.colors.textTertiary};
    line-height: 1.6;
    letter-spacing: -0.004em;
  }
`;

const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <CertificationsSection id="certifications" ref={sectionRef}>
      <SectionHeader $visible={isVisible}>
        <div className="eyebrow">
          <span className="num">06</span>
          <div className="line" />
        </div>
        <h2>Certifications</h2>
        <p className="subtitle">Continuous learning &amp; growth</p>
      </SectionHeader>

      {certifications.map((cert, index) => (
        <CertCard key={cert.id} $visible={isVisible} $delay={0.15 + index * 0.12}>
          <CardTop>
            <TitleRow>
              <CertTitle>{cert.title}</CertTitle>
              <StatusBadge>
                <span className="status-dot" />
                {cert.status}
              </StatusBadge>
            </TitleRow>

            <MetaStrip>
              <MetaChip><FaClock /> {cert.duration}</MetaChip>
              <MetaChip><FaBookOpen /> {cert.date}</MetaChip>
              <MetaChip><FaGraduationCap /> London</MetaChip>
            </MetaStrip>

            <InstitutionLink href={cert.institutionUrl} target="_blank" rel="noopener noreferrer">
              <FaGraduationCap />
              {cert.institution}
              <FaExternalLinkAlt />
            </InstitutionLink>
            <Department>{cert.department}</Department>

            <OutcomeBanner>
              <FaAward />
              <span>{cert.outcome}</span>
            </OutcomeBanner>

            <TechRow>
              {cert.techStack.map((tech, idx) => (
                <TechTag key={idx}>{tech}</TechTag>
              ))}
            </TechRow>

            <ActionRow>
              <LinkButton href={cert.institutionUrl} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                Learn More
              </LinkButton>
              <ExpandToggle onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}>
                {expandedId === cert.id ? (
                  <><FaChevronUp /> Hide Details</>
                ) : (
                  <><FaChevronDown /> Curriculum &amp; Projects</>
                )}
              </ExpandToggle>
            </ActionRow>
          </CardTop>

          <ExpandablePanel $open={expandedId === cert.id}>
            <div className="inner">
              <PanelBody>
                <PanelSection>
                  <div className="panel-heading">
                    <FaBookOpen />
                    <span>Curriculum Overview</span>
                    <div className="rule" />
                  </div>
                  <CurriculumList>
                    {cert.curriculum.map((item, idx) => (
                      <CurriculumItem key={idx}>
                        <span className="step-num">{idx + 1}</span>
                        <span className="step-text">{item}</span>
                      </CurriculumItem>
                    ))}
                  </CurriculumList>
                </PanelSection>

                <PanelSection>
                  <div className="panel-heading">
                    <FaRocket />
                    <span>Capstone Projects</span>
                    <div className="rule" />
                  </div>
                  <ProjectsGrid>
                    {cert.capstoneProjects.map((project, idx) => (
                      <CapstoneCard key={idx} href={project.url} target="_blank" rel="noopener noreferrer">
                        <div className="proj-icon"><FaRocket /></div>
                        <div className="proj-title">
                          {project.title}
                          <FaExternalLinkAlt />
                        </div>
                        <div className="proj-desc">{project.description}</div>
                      </CapstoneCard>
                    ))}
                  </ProjectsGrid>
                </PanelSection>
              </PanelBody>
            </div>
          </ExpandablePanel>
        </CertCard>
      ))}
    </CertificationsSection>
  );
};

export default Certifications;
