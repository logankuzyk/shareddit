import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";

import { RedditContext } from "../RedditContext";
import { colors } from "./styles";

interface TextProps {
  bodyHTML: string;
}

export const Text: React.FC<TextProps> = ({ bodyHTML }) => {
  const { darkMode, font } = useContext(RedditContext);

  const styledBodyHTML = `<style>code {
      padding: 6px;
      margin-top: 4px;
      margin-bottom: 4px;
      width: 100%;
      background-color: ${colors(darkMode).backgroundColor};
      border: 1px solid ${colors(darkMode).borderColor};
      border-radius: 12px;
      white-space: pre-wrap;
      display: block;
    }</style>${bodyHTML}`;

  return (
    <Box
      dangerouslySetInnerHTML={{ __html: styledBodyHTML }}
      style={{
        display: "inline-block",
        textAlign: "left",
        fontSize: 14,
        padding: 6,
        fontFamily: `${font}`,
      }}
    ></Box>
  );
};
