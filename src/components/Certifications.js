import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { certifications } from "../data/data";
import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBookOpen,
  FaRocket,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { fadeInUp } from "../styles/animations";

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ─── Section ─── */

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

/* ─── Card ─── */

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

/* ─── Hero layout: thumbnail left, details right ─── */

const CardHero = styled.div`
  display: flex;
  gap: 36px;
  padding: 36px 40px 32px;
  align-items: flex-start;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 28px 24px 24px;
    gap: 24px;
  }
`;

const CertThumbnail = styled.a`
  display: block;
  position: relative;
  width: 180px;
  flex-shrink: 0;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.08),
    0 8px 24px rgba(0, 0, 0, 0.12);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};

  img {
    width: 100%;
    display: block;
  }

  .hover-label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #fff;
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-weight: 600;
    letter-spacing: 0.04em;

    svg { font-size: 11px; }
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.1),
      0 20px 48px rgba(0, 0, 0, 0.18);
    border-color: ${({ theme }) => theme.colors.primary};

    .hover-label { opacity: 1; }
  }

  @media (max-width: 680px) {
    width: 200px;
  }
`;

/* ─── Right-side details ─── */

const CardDetails = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 8px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const CertTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.03em;
  line-height: 1.25;
  flex: 1;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: ${({ $completed }) => $completed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(99, 102, 241, 0.1)'};
  border: 1px solid ${({ $completed }) => $completed ? 'rgba(34, 197, 94, 0.3)' : 'rgba(99, 102, 241, 0.3)'};
  color: ${({ $completed }) => $completed ? '#22c55e' : '#6366f1'};
  border-radius: ${({ theme }) => theme.borderRadiusPill};
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 3px;
`;

const InstitutionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: all 0.15s ease;
  margin-bottom: 16px;

  svg { font-size: 10px; opacity: 0.5; }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    svg { opacity: 1; }
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const MetaDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  margin-bottom: 20px;
  font-size: 12.5px;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.01em;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .dot {
    margin: 0 10px;
    opacity: 0.3;
    font-size: 6px;
  }

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textTertiary};
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 11px;
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
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 680px) {
    justify-content: center;
  }
`;

const VerifyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #22c55e;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.01em;

  svg { font-size: 10px; }

  &:hover {
    background: rgba(34, 197, 94, 0.15);
    border-color: rgba(34, 197, 94, 0.45);
    transform: translateY(-1px);
  }
`;

const ExpandToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 7px 14px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.mono};
  transition: all 0.18s ease;
  letter-spacing: 0.01em;

  svg {
    font-size: 10px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primarySubtle};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ─── Expandable panel (unchanged) ─── */

const ExpandablePanel = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.38s cubic-bezier(0.4, 0, 0.2, 1);

  > .inner { overflow: hidden; }
`;

const PanelBody = styled.div`
  padding: 0 40px 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};

  @media (max-width: 600px) {
    padding: 0 24px 20px;
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

/* ─── Component ─── */

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

          <CardHero>
            {/* ── Left: certificate thumbnail ── */}
            {cert.certificatePdf && (
              <CertThumbnail
                href={`${process.env.PUBLIC_URL}${cert.certificatePdf}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${process.env.PUBLIC_URL}${cert.certificateThumb || cert.certificatePdf}`}
                  alt={`${cert.title} certificate`}
                />
                <div className="hover-label">
                  <FaExternalLinkAlt />
                  View Certificate
                </div>
              </CertThumbnail>
            )}

            {/* ── Right: details ── */}
            <CardDetails>
              <TitleRow>
                <CertTitle>{cert.title}</CertTitle>
              </TitleRow>

              <InstitutionLink href={cert.institutionUrl} target="_blank" rel="noopener noreferrer">
                <FaGraduationCap />
                {cert.institution}
                <FaExternalLinkAlt />
              </InstitutionLink>

              <MetaDots>
                <span>{cert.duration}</span>
                <span className="dot">●</span>
                <span>{cert.date}</span>
                <span className="dot">●</span>
                <span>London</span>
                {cert.issuedDate && (
                  <>
                    <span className="dot">●</span>
                    <span>Issued {cert.issuedDate}</span>
                  </>
                )}
              </MetaDots>

              <TechRow>
                {cert.techStack.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechRow>

              <ActionRow>
                {cert.credentialUrl && (
                  <VerifyButton href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                    <FaShieldAlt />
                    Verify Credential
                  </VerifyButton>
                )}
                <ExpandToggle onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}>
                  {expandedId === cert.id ? (
                    <><FaChevronUp /> Hide Details</>
                  ) : (
                    <><FaChevronDown /> Curriculum &amp; Projects</>
                  )}
                </ExpandToggle>
              </ActionRow>
            </CardDetails>
          </CardHero>

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
