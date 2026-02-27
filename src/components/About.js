import React, { useState, useContext, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { personalInfo } from "../data/data";
import { ThemeContext } from "../context/ThemeContext";

const charReveal = keyframes`
  from { opacity: 0; transform: translateY(60px); }
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

const gentleFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(-1deg); }
  50%       { transform: translateY(-10px) rotate(0deg); }
`;

const heartBurst = keyframes`
  0%   { opacity: 0.9; transform: translate(-50%, -50%) scale(0.6) translateY(0); }
  30%  { opacity: 1;   transform: translate(-50%, -50%) scale(1.15) translateY(-14px); }
  65%  { opacity: 1;   transform: translate(-50%, -50%) scale(1) translateY(-70px); }
  100% { opacity: 0;   transform: translate(-50%, -50%) scale(0.8) translateY(-130px); }
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
  padding: 100px 48px 60px;
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
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 1px;
  }

  span {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
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
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.01s 0.98s forwards` : "none"};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryHover});
    width: 0;
    animation: ${({ $visible }) => $visible ? css`${expandWidth} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards` : "none"};
  }
`;

const RoleLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.5s ease 1.2s forwards` : "none"};

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
    background: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
    animation: ${pulseDot} 2.5s ease-in-out infinite;
    color: ${({ theme }) => theme.colors.primary};
  }

  .availability {
    font-size: 11px;
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.primary};
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
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.5s ease 1.3s forwards` : "none"};

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
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.6s ease 1.4s forwards` : "none"};

  p {
    font-size: 15.5px;
    color: ${({ theme }) => theme.colors.textSecondary};
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

const PhotoColumn = styled.div`
  display: none;
`;

const PhotoFrame = styled.div`
  position: relative;
  cursor: pointer;
  outline: none;
`;

const FloatingPhoto = styled.div`
  position: relative;
  animation: ${gentleFloat} 7s ease-in-out infinite;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(
      145deg,
      ${({ theme }) => theme.colors.primary}55,
      transparent 55%,
      ${({ theme }) => theme.colors.primary}18
    );
    z-index: 1;
    pointer-events: none;
  }

  img {
    width: 220px;
    height: 280px;
    object-fit: cover;
    object-position: center top;
    border-radius: 20px;
    display: block;
    position: relative;
    z-index: 0;
    filter: grayscale(8%) contrast(1.02);
    transition: filter 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
    box-shadow:
      0 2px 0 1px ${({ theme }) => theme.colors.divider},
      0 20px 60px rgba(0, 0, 0, 0.4);
  }

  &:hover {
    animation-play-state: paused;
  }

  &:hover img {
    filter: grayscale(0%) contrast(1.04);
    box-shadow:
      0 2px 0 1px ${({ theme }) => theme.colors.primaryBorder},
      0 24px 72px rgba(0, 0, 0, 0.5),
      0 0 0 1px ${({ theme }) => theme.colors.primary}30;
  }

  @media (max-width: 900px) {
    img {
      width: 64px;
      height: 80px;
      border-radius: 10px;
    }

    &::before {
      border-radius: 10px;
    }
  }
`;

const Heart = styled.svg`
  position: absolute;
  pointer-events: none;
  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
  z-index: 10;
  width: 48px;
  height: 48px;
  animation: ${heartBurst} 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  will-change: transform, opacity;
`;

const LocationTag = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.textTertiary};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  .loc-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.green};
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0;
  animation: ${({ $visible }) => $visible ? css`${fadeIn} 0.4s ease 1.9s forwards` : "none"};

  span {
    font-size: 9px;
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.primary} 0%,
      transparent 100%
    );
    border-radius: 1px;
    animation: scaleDown 2s ease-in-out infinite;
  }

  @keyframes scaleDown {
    0%, 100% { transform: scaleY(0.5); transform-origin: top; opacity: 0.6; }
    50%       { transform: scaleY(1);   transform-origin: top; opacity: 1; }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const About = () => {
  const [hearts, setHearts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useContext(ThemeContext);
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

  const handleDoubleClick = (e) => {
    const id = Math.random().toString(36).substr(2, 9);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.nativeEvent.clientX - rect.left;
    const y = e.nativeEvent.clientY - rect.top;
    setHearts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1200);
  };

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
                  style={{ animationDelay: `${(0.15 + i * 0.035).toFixed(3)}s` }}
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
                  style={{ animationDelay: `${(0.54 + i * 0.035).toFixed(3)}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </HeroName>

          <HeroDivider $visible={isVisible} />

          <RoleLine $visible={isVisible}>
            <span className="role-text">{personalInfo.description}</span>
            <span className="dot hide-mobile" />
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

        <PhotoColumn $visible={isVisible}>
          <PhotoFrame
            tabIndex={0}
            onDoubleClick={handleDoubleClick}
            aria-label="Profile picture — double click for a surprise"
          >
            <FloatingPhoto>
              <img
                src={`${process.env.PUBLIC_URL}/profile.png`}
                alt={personalInfo.name}
              />
            </FloatingPhoto>
            {hearts.map((h) => (
              <Heart
                key={h.id}
                $x={h.x}
                $y={h.y}
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M30 53s-17-10.7-17-23.2C13 19.2 21.2 13 30 21.5 38.8 13 47 19.2 47 29.8 47 42.3 30 53 30 53z"
                  fill={theme === "dark" ? "#f97316" : "#e8650a"}
                  stroke={theme === "dark" ? "#f97316" : "#e8650a"}
                  strokeWidth="1.5"
                />
              </Heart>
            ))}
          </PhotoFrame>
          <LocationTag>
            <span className="loc-dot" />
            <span>London, UK</span>
          </LocationTag>
        </PhotoColumn>
      </HeroGrid>

      <ScrollHint $visible={isVisible}>
        <span>Scroll</span>
        <div className="scroll-line" />
      </ScrollHint>
    </AboutSection>
  );
};

export default About;
