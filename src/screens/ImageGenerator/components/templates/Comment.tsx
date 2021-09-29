import React, { useContext, useState, useEffect } from "react";
import { Box, Center, SimpleGrid, Wrap } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";
import uniqolor from "uniqolor";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { RedditContext } from "../RedditContext";
import { colors } from "./styles";
import { Award } from "../../../../types";
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
  const [shouldHighlightComment, setShouldHighlightComment] =
    useState<boolean>(false);

  useEffect(() => {
    if (newIndex === firstComment && !lastComment) {
      setShouldHighlightComment(true);
    } else {
      setShouldHighlightComment(false);
    }
  }, [newIndex, firstComment, lastComment]);

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
        onClick={
          searchingForComment ? () => onCommentSelect(newIndex) : () => {}
        }
        _hover={
          searchingForComment
            ? {
                width: "100%",
                backgroundColor: "rgb(10,147,150,0.4)",
                borderRadius: 12,
              }
            : {}
        }
        style={{
          backgroundColor: shouldHighlightComment
            ? "rgb(10, 147, 150, 0.4)"
            : "",
          borderRadius: 12,
        }}
      >
        <SimpleGrid
          paddingLeft={2}
          columns={3}
          columnGap={1}
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: 12,
          }}
        >
          <Center>{displayName}</Center>
          <Wrap
            shouldWrapChildren={false}
            flexDirection="row"
            alignItems="stretch"
          >
            <Box>
              <Icon icon="vote" text={score} />
            </Box>
            <Box>
              <Icon icon="date" text={dateString} />
            </Box>
            <Box>
              <Awards awards={awards} />
            </Box>
          </Wrap>
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
