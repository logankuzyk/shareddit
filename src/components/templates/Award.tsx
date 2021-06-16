import React from "react";

interface AwardProps {
  awardID: string;
  imageSrc: string;
  awardCount: number;
}

export const award: React.FC<AwardProps> = ({
  awardID,
  imageSrc,
  awardCount,
}) => {
  return (
    <a
      className="awarding-link"
      href="/r/todayilearned/gilded"
      data-award-id={{ awardID }}
    >
      <span className="awarding-icon-container">
        <img
          className="awarding-icon"
          height="48px"
          width="48px"
          src={{ imageSrc }}
        />
        {{ awardCount }}
      </span>
    </a>
  );
};
