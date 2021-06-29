import React, { ReactElement } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";

import { Icon } from "./Icon";

interface TitleProps {
  author: string;
  score: string;
  date: number;
  title: string;
  sub: string;
  commentsCount: number;
  Content?: ReactElement<any>;
}

export const Title: React.FC<TitleProps> = ({
  author,
  score,
  date,
  title,
  sub,
  commentsCount,
  Content,
}) => {
  const datePosted = new Date(date);
  const dateFormat = timeFormat("%d %b %Y");
  const dateString = dateFormat(datePosted);

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        <Box width={2} />
        <Box style={{ textAlign: "left" }}>{title}</Box>
      </Box>
      {Content ? <Box padding={2}>{Content}</Box> : <></>}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 8,
          fontSize: 14,
        }}
      >
        {`in /r/${sub} by ${author}`}
      </Box>
      <SimpleGrid
        paddingLeft={2}
        paddingBottom={2}
        columns={3}
        columnGap={2}
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 12,
        }}
      >
        <Icon icon="vote" text={score} />
        <Icon icon="date" text={dateString} />
        <Icon icon="comment" text={String(commentsCount)} />
      </SimpleGrid>
    </>
  );
};
