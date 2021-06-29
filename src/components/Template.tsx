import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";

import { RedditContext } from "./RedditContext";
import templates from "./templates";

export const Template: React.FC = () => {
  const data = useContext(RedditContext);
  const { darkMode } = data;
  const { TitleTemplate, CommentTemplate } = templates(data.content.type);
  return (
    <Box id="reddit-preview" overflow="hidden">
      <Box
        style={{
          display: "flex",
          borderRadius: "12px",
          borderWidth: 1,
          color: darkMode ? "#FFFFFF" : "#001219",
          backgroundColor: darkMode ? "#001219" : "#FFFFFF",
          borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
          padding: 8,
          flexDirection: "column",
          fontFamily: "sans",
          width: "100%",
          fontSize: 16,
        }}
      >
        <TitleTemplate {...data.content} />
        {data.content.comments ? (
          <CommentTemplate {...data.content.comments} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
