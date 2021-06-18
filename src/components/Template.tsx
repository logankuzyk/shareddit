import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { Comment } from "./templates/Comment";
import { FleshedRedditSubmission, ImageTheme } from "../types";

import "../style/redditThemes/old.css";

interface TemplateProps {
  content: FleshedRedditSubmission;
}

export const Template: React.FC<TemplateProps> = ({ content }) => {
  const [theme, setTheme] = useState<ImageTheme>("old");
  const [type, setType] = useState("");

  return (
    <Box>
      <Comment comments={content.comments}></Comment>
    </Box>
  );
};
