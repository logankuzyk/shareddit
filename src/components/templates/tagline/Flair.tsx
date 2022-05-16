import React from "react";

import { lightFlairText, darkFlairText } from "../../../styles/themes";
import { BadgeContainer } from "./BadgeContainer";
import { RedditFlair } from "../../../types/reddit";
import { Caption } from "../../typography/Caption";

interface FlairProps {
  flair: RedditFlair;
}

export const Flair: React.FC<FlairProps> = ({ flair }) => {
  const textColor = flair.textColor === "dark" ? darkFlairText : lightFlairText;
  return (
    <BadgeContainer
      backgroundColor={flair.backgroundColor}
      borderColor={flair.backgroundColor}
    >
      <img
        style={{
          display: "flex",
          width: "0.7em",
          height: "0.7em",
        }}
        src={flair.img}
        alt="flair icon"
      />
      <Caption color={textColor}>{flair.text}</Caption>
    </BadgeContainer>
  );
};
