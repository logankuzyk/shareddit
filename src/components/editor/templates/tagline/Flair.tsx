import React, { useState, useEffect } from "react";

import { lightFlairText, darkFlairText } from "../../../../styles/themes";
import { RedditFlair } from "../../../../types/reddit";
import { Caption } from "../../../typography/Caption";
import { BadgeContainer } from "./BadgeContainer";

interface FlairProps {
  flair: RedditFlair;
}

export const Flair: React.FC<FlairProps> = ({ flair }) => {
  const textColor = flair.textColor === "dark" ? darkFlairText : lightFlairText;
  const src = flair.img ?? "";
  const [corsSrc, setCorsSrc] = useState<string>(src);

  useEffect(() => {
    if (window) {
      setCorsSrc("/reddit-flair/" + src.replace("https://", ""));
    }
  }, [src]);

  return (
    <BadgeContainer
      backgroundColor={flair.backgroundColor}
      borderColor={flair.backgroundColor}
    >
      <img
        alt="flair icon"
        src={corsSrc}
        style={{
          display: "flex",
          width: "0.7em",
          height: "0.7em",
        }}
      />
      <Caption color={textColor}>{flair.text}</Caption>
    </BadgeContainer>
  );
};
