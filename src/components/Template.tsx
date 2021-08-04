import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";

import { RedditContext } from "./RedditContext";
import templates from "./templates";

export const Template: React.FC = () => {
  const data = useContext(RedditContext);
  const { darkMode, font } = data;
  const { TitleTemplate, CommentTemplate } = templates(data.content.type);
  return (
    <Box
      marginBottom={4}
      style={{
        display: "flex",
        borderRadius: "12px",
        borderWidth: 1,
        color: darkMode ? "#FFFFFF" : "#001219",
        borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
        flexDirection: "column",
        fontFamily: font,
        width: "100%",
        fontSize: 16,
        overflow: "hidden",
      }}
    >
      <Box
        id="reddit-preview"
        overflow="hidden"
        style={{
          position: "relative",
          padding: 12,
          backgroundColor: darkMode ? "#001219" : "#FFFFFF",
        }}
      >
        <TitleTemplate {...data.content} />
        {data.content.comments ? (
          <>
            <Box height={4} />
            <CommentTemplate {...data.content.comments} />
          </>
        ) : (
          <></>
        )}
        <Box marginBottom={1}>
          <Box
            position="absolute"
            textAlign="right"
            bottom={0}
            width="100%"
            fontSize={12}
            paddingRight={6}
            marginTop={2}
            opacity={0.5}
          >
            {"📷 via shareddit.com"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
