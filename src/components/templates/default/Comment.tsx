import React, { useContext } from "react";
import { Box, Center, Divider } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { RedditContext } from "../../RedditContext";

interface CommentProps {
  author: string;
  score: string;
  date: number;
  bodyHTML: string;
  child?: CommentProps;
}

export const Comment: React.FC<CommentProps> = ({
  author,
  score,
  date,
  bodyHTML,
  child,
}) => {
  const { darkMode } = useContext(RedditContext);

  const datePosted = new Date(date);
  const dateFormat = timeFormat("%d %b %Y");
  const dateString = dateFormat(datePosted);

  return (
    <Box
      style={{
        display: "flex",
        borderRadius: "12px",
        borderWidth: 1,
        color: darkMode ? "#FFFFFF" : "#001219",
        borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
        padding: 8,
        flexDirection: "column",
        fontFamily: "sans",
        width: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 16,
        }}
      >
        <Center>
          <Box width={4} />
          {author}
          <Box width={8} />
          <Icon icon="vote" text={score} />
          <Box width={4} />
          <Icon icon="date" text={dateString} />
        </Center>
      </Box>
      <Box
        style={{
          marginTop: 12,
          marginBottom: 2,
          height: 1,
          backgroundColor: "#AAAAAA",
          width: "100%",
        }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "left",
          fontSize: 18,
          width: "100%",
          justifyContent: "space-evenly",
          whiteSpace: "normal",
        }}
      >
        <Text bodyHTML={bodyHTML} />
        {child ? (
          <>
            <Box height={4} />
            <Box style={{ display: "flex", flexDirection: "row" }}>
              <Box
                style={{
                  width: "5%",
                  height: "100%",
                }}
              />
              <Comment {...child} />
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
