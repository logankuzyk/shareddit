import React from "react";

import "../../../style/redditThemes/old.css";

interface AwardProps {
  awardID: string;
  imageSrc: string;
  awardCount: number;
}

export const Award: React.FC<AwardProps> = ({
  awardID,
  imageSrc,
  awardCount,
}) => {
  return (
    <a className="awarding-link" data-award-id={awardID}>
      <span className="awarding-icon-container">
        <img
          className="awarding-icon"
          height="48px"
          width="48px"
          src={imageSrc}
        />
        {{ awardCount }}
      </span>
    </a>
  );
};
