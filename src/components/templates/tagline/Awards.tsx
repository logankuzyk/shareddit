import React from "react";

import { useEditorContext } from "../../../contexts/EditorContext";
import { BadgeContainer } from "./BadgeContainer";
import { RedditAward } from "../../../types/reddit";
import { Caption } from "../../typography/Caption";

interface AwardsProps {
  awards: RedditAward[] | undefined;
}

export const Awards: React.FC<AwardsProps> = ({ awards }) => {
  const { theme } = useEditorContext();

  if (awards) {
    return (
      <BadgeContainer backgroundColor={theme.main[100]}>
        {awards.map((award) => (
          <React.Fragment key={award.img}>
            <img
              style={{
                display: "flex",
                width: "0.7em",
                height: "0.7em",
              }}
              src={award.img}
              alt="flair icon"
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
