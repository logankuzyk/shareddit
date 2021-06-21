import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { Comment } from "./templates/Comment";
import { FleshedRedditSubmission, ImageTheme } from "../types";
interface TemplateProps {
  content: FleshedRedditSubmission;
}

export const Template: React.FC<TemplateProps> = ({ content }) => {
  const [theme, setTheme] = useState<ImageTheme>("old");
  const [type, setType] = useState("");

  return (
    <Box
      style={{
        backgroundColor: "white",
        textAlign: "left",
        fontFamily: "verdana, arial, helvetica, sans-serif",
        fontSize: "x-small",
        lineHeight: "normal",
      }}
    >
      <Comment comments={content.comments}></Comment>
    </Box>
  );
};
