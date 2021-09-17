import React, { useContext } from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";
import uniqolor from "uniqolor";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { RedditContext } from "../RedditContext";
import { colors } from "./styles";
import { Award } from "../../types";
import { Awards } from "./Awards";

interface CommentProps {
  author: string;
  score: string;
  date: number;
  bodyHTML: string;
  child?: CommentProps;
  awards: Award[];
  index?: number;
}

export const Comment: React.FC<CommentProps> = ({
  author,
  score,
  date,
  bodyHTML,
  child,
  awards,
  index,
}) => {
  const {
    darkMode,
    censorUsernames,
    searchingForComment,
    firstComment,
    lastComment,
    setters: { onCommentSelect },
  } = useContext(RedditContext);

  const datePosted = new Date(date);
  const dateFormat = timeFormat("%d %b %Y");
  const dateString = dateFormat(datePosted);

  const displayName = censorUsernames ? (
    <Box
      style={{
        backgroundColor: `${uniqolor(author).color}`,
        height: 18,
        width: 64,
        borderRadius: 2,
      }}
    ></Box>
  ) : (
    author
  );

  const newIndex = index === undefined ? 0 : index + 1;

  if (firstComment !== undefined && lastComment !== undefined) {
    if (newIndex >= firstComment) {
      if (!(newIndex <= lastComment)) {
        return <></>;
      }
    } else if (child) {
      return <Comment {...child} index={newIndex} />;
    } else {
      return <></>;
    }
  }

  return (
    <Box
      style={{
        display: "flex",
        color: colors(darkMode).color,
        padding: "8 8 0 8",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        style={{
          position: "relative",
          backgroundColor: searchingForComment
            ? "rgb(0, 0, 0, 0.3)"
            : "rgb(0,0,0,0)",
        }}
      >
        {searchingForComment ? (
          <Box
            position="absolute"
            width="100%"
            height="100%"
            marginX="auto"
            fontSize="5xl"
            onClick={() => {
              onCommentSelect(newIndex);
            }}
          >
            {newIndex + 1}
          </Box>
        ) : (
          <></>
        )}
        <SimpleGrid
          paddingLeft={2}
          columns={3}
          columnGap={2}
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: 12,
          }}
        >
          <Center>
            <Box>{displayName}</Box>
          </Center>
          <Box>
            <Icon icon="vote" text={score} />
          </Box>
          <Box>
            <Icon icon="date" text={dateString} />
          </Box>
          <Box>
            <Awards awards={awards} />
          </Box>
        </SimpleGrid>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "left",
            width: "100%",
            justifyContent: "space-evenly",
            whiteSpace: "normal",
          }}
        >
          <Text bodyHTML={bodyHTML} />
        </Box>
      </Box>
      {child ? (
        <>
          <Box height={1} />
          <Box
            paddingLeft={4}
            borderLeftWidth={2}
            borderLeftColor={colors(darkMode).iconBackgroundColor}
          >
            <Comment {...child} index={newIndex} />
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
