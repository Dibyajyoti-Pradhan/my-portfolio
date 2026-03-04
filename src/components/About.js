import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { MdLocationPin } from "react-icons/md";
import { personalInfo } from "../data/data";

const charReveal = keyframes`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideRight = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const expandWidth = keyframes`
  from { width: 0; }
  to   { width: 100%; }
`;

const pulseDot = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 currentColor; }
  50%       { box-shadow: 0 0 0 5px transparent; }
`;

const AboutSection = styled.section`
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroGrid = styled.div`
  padding: 100px 48px 108px;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 900px) {
    padding: 48px 24px 60px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${slideRight} 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s forwards` : "none"};

  .line {
    width: 24px;
    height: 1px;
    background: ${({ theme }) => theme.colors.divider};
    border-radius: 1px;
  }

  span {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

const HeroName = styled.div`
  line-height: 0.88;
  letter-spacing: -0.055em;
  font-weight: 900;
  font-size: clamp(60px, 9.5vw, 112px);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 28px;
  overflow: hidden;

  .line-1, .line-2 {
    display: block;
    overflow: hidden;
  }

  .line-2 {
    color: ${({ theme }) => theme.colors.primary};
  }

  .char {
    display: inline-block;
    opacity: 0;
    will-change: transform, opacity;
  }

  ${({ $visible }) =>
    $visible &&
    css`
      .char {
        animation: ${charReveal} 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
      }
    `}
`;

const HeroDivider = styled.div`
  position: relative;
  height: 1px;
  background: ${({ theme }) => theme.colors.divider};
  margin-bottom: 24px;
  overflow: hidden;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.01s 0.68s forwards` : "none"};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    width: 0;
    animation: ${({ $visible }) => $visible ? css`${expandWidth} 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.70s forwards` : "none"};
  }
`;

const RoleLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.5s ease 0.88s forwards` : "none"};

  .role-text {
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: 0.04em;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green};
    flex-shrink: 0;
    animation: ${pulseDot} 2.5s ease-in-out infinite;
    color: ${({ theme }) => theme.colors.green};
  }

  .location-pin {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.green};
    flex-shrink: 0;
  }

  .availability {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.green};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    .hide-mobile { display: none; }
  }
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 36px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.5s ease 0.96s forwards` : "none"};

  .label {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textTertiary};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.01em;
    background: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primaryBorder};
      color: ${({ theme }) => theme.colors.text};
    }

    .company-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }
  }

  .separator {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 11px;
  }

  @media (max-width: 900px) {
    .label { display: none; }
    .separator { display: none; }
  }
`;

const BioParagraphs = styled.div`
  max-width: 560px;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.6s ease 1.06s forwards` : "none"};

  p {
    font-size: 15.5px;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.78;
    margin-bottom: 16px;
    letter-spacing: -0.008em;

    &:last-child { margin-bottom: 0; }

    a {
      color: ${({ theme }) => theme.colors.text};
      text-decoration: underline;
      text-underline-offset: 3px;
      text-decoration-thickness: 1px;
      text-decoration-color: ${({ theme }) => theme.colors.divider};
      transition: ${({ theme }) => theme.transitionFast};

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration-color: ${({ theme }) => theme.colors.primaryBorder};
      }
    }

    strong {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
    }
  }
`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <AboutSection id="about" ref={sectionRef}>
      <HeroGrid>
        <TextBlock>
          <Eyebrow $visible={isVisible} theme={undefined}>
            <div className="line" />
            <span>Hello, I'm</span>
          </Eyebrow>

          <HeroName $visible={isVisible}>
            <span className="line-1">
              {Array.from("DIBYAJYOTI").map((char, i) => (
                <span
                  key={i}
                  className="char"
                  style={{ animationDelay: `${(0.12 + i * 0.022).toFixed(3)}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="line-2">
              {Array.from("PRADHAN").map((char, i) => (
                <span
                  key={i}
                  className="char"
                  style={{ animationDelay: `${(0.38 + i * 0.022).toFixed(3)}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </HeroName>

          <HeroDivider $visible={isVisible} />

          <RoleLine $visible={isVisible}>
            <span className="role-text">{personalInfo.description}</span>
            <MdLocationPin className="location-pin hide-mobile" />
            <span className="role-text hide-mobile">London, UK</span>
            <span className="dot" />
            <span className="availability">Available</span>
          </RoleLine>

          <CompanyRow $visible={isVisible}>
            <span className="label">Currently</span>
            <span className="pill">
              <span className="company-dot" style={{ background: "#ff7a59" }} />
              HubSpot
            </span>
            <span className="separator">·</span>
            <span className="label">Previously</span>
            <span className="pill">
              <span className="company-dot" style={{ background: "#1877f2" }} />
              Meta
            </span>
            <span className="pill">
              <span className="company-dot" style={{ background: "#ff9900" }} />
              Amazon
            </span>
          </CompanyRow>

          <BioParagraphs $visible={isVisible}>
            {personalInfo.about.slice(0, 2).map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </BioParagraphs>
        </TextBlock>
      </HeroGrid>
    </AboutSection>
  );
};

export default About;
