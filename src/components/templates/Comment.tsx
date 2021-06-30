import React, { useContext } from "react";
import { Box, Center, Grid, SimpleGrid } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";

import { Icon } from "./Icon";
import { Text } from "./Text";
import { RedditContext } from "../RedditContext";
import { colors } from "./styles";

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
        color: colors(darkMode).color,
        padding: "8 8 0 8",
        flexDirection: "column",
        fontFamily: "sans",
        width: "100%",
      }}
    >
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
          <Box>{author}</Box>
        </Center>
        <Box>
          <Icon icon="vote" text={score} />
        </Box>
        <Box>
          <Icon icon="date" text={dateString} />
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
      {child ? (
        <>
          <Box height={1} />
          <Grid columns={2} p={2}>
            <Box width="auto" paddingLeft={2}>
              <Comment {...child} />
            </Box>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};