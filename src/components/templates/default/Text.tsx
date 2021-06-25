import React from "react";
import { Box } from "@chakra-ui/react";

interface TextProps {
  bodyHTML: string;
}

export const Text: React.FC<TextProps> = ({ bodyHTML }) => {
  const styledBodyHTML = `<style>code {
      padding: 6px;
      margin-top: 4px;
      margin-bottom: 4px;
      width: 100%;
      background-color: #FFF1EB;
      border: 1px solid #AAAAAA;
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
        fontSize: 16,
        padding: 6,
      }}
    ></Box>
  );
};
