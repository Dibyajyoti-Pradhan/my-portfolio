// src/components/Achievements.js

import React, { useState } from "react";
import styled from "styled-components";
import { achievements } from "../data/data";
import Card from "./common/Card";
import Button from "./common/Button";

const AchievementsSection = styled.section`
  max-width: 900px;
  margin: 140px auto;
  padding: 0 24px;

  h2 {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.03em;
    margin-bottom: 64px;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;

    @media (max-width: 768px) {
      font-size: 36px;
      margin-bottom: 48px;
    }
  }
`;

const AchievementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0;
`;

const AchievementItem = styled(Card)`
  .achievement-title {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    margin-bottom: 10px;
  }

  .achievement-description {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 1.6;
  }
`;

const Achievements = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const achievementsToShow = showMore ? achievements : achievements.slice(0, 2);

  return (
    <AchievementsSection id="achievements">
      <h2>Achievements</h2>
      <AchievementsList>
        {achievementsToShow.map(({ id, title, description }) => (
          <AchievementItem key={id} tabIndex="0">
            <div className="achievement-title">{title}</div>
            <div className="achievement-description">{description}</div>
          </AchievementItem>
        ))}
      </AchievementsList>
      {achievements.length > 2 && (
        <Button onClick={handleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </AchievementsSection>
  );
};

export default Achievements;
