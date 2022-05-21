import React from "react";

import { RedditAward } from "../../../types/reddit";
import { Caption } from "../../typography/Caption";
import { BadgeContainer } from "./BadgeContainer";

interface AwardsProps {
  awards: RedditAward[] | undefined;
}

export const Awards: React.FC<AwardsProps> = ({ awards }) => {
  if (awards) {
    return (
      <BadgeContainer>
        {awards.map((award) => (
          <React.Fragment key={award.img}>
            <img
              alt="flair icon"
              src={award.img}
              style={{
                display: "flex",
                width: "0.7em",
                height: "0.7em",
              }}
            />
            <Caption>{award.count}</Caption>
          </React.Fragment>
        ))}
      </BadgeContainer>
    );
  } else {
    return <></>;
  }
};
