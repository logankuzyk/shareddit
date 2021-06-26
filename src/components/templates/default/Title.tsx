import React, { useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";

import { Text } from "./Text";
import { Icon } from "./Icon";
import { RedditContext } from "../../RedditContext";

interface TitleProps {
  author: string;
  score: string;
  date: number;
  title: string;
  sub: string;
  commentsCount: number;
}

export const Title: React.FC<TitleProps> = ({
  author,
  score,
  date,
  title,
  sub,
  commentsCount,
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
        fontSize: 16,
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        <Box width={2} />
        <Center>{title}</Center>
      </Box>
      <Box
        style={{
          marginTop: 6,
          marginBottom: 5,
          height: 1,
          backgroundColor: "#AAAAAA",
          width: "100%",
        }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 8,
        }}
      >
        {`in /r/${sub} by ${author}`}
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 8,
        }}
      >
        <Center>
          <Icon icon="vote" text={score} />
          <Box width={4} />
          <Icon icon="date" text={dateString} />
          <Box width={4} />
          <Icon icon="comment" text={String(commentsCount)} />
        </Center>
      </Box>
    </Box>
  );
};
