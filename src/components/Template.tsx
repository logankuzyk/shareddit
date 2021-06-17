import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

import { Comment } from "./templates/Comment";
import { FleshedRedditSubmission, ImageTheme } from "../types";

interface TemplateProps {
  content: FleshedRedditSubmission | null;
}

export const Template: React.FC<TemplateProps> = ({ content }) => {
  const [theme, setTheme] = useState<ImageTheme>("old");
  const [type, setType] = useState("");
  return (
    <Box>
      <Comment {...content.comments[0]}></Comment>
    </Box>
  );
};
