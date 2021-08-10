import React, { ReactElement, useContext } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { timeFormat } from "d3-time-format";
import uniqolor from "uniqolor";

import { Icon } from "./Icon";
import { colors } from "./styles";
import { RedditContext } from "../RedditContext";
import { Award } from "../../types";
import { Awards } from "./Awards";

interface TitleProps {
  author: string;
  score: string;
  date: number;
  title: string;
  sub: string;
  commentsCount: number;
  Content?: ReactElement<any>;
  awards: Award[];
}

export const Title: React.FC<TitleProps> = ({
  author,
  score,
  date,
  title,
  sub,
  commentsCount,
  Content,
  awards,
}) => {
  const { darkMode, censorUsernames, censorSubreddit } =
    useContext(RedditContext);

  const datePosted = new Date(date);
  const dateFormat = timeFormat("%d %b %Y");
  const dateString = dateFormat(datePosted);

  const displayName = censorUsernames ? (
    <Box
      style={{
        backgroundColor: `${uniqolor(author).color}`,
        height: 18,
        width: 64,
        marginLeft: 6,
        borderRadius: 2,
      }}
    ></Box>
  ) : (
    author
  );

  const displaySub = censorSubreddit ? "a subreddit" : `/r/${sub}`;

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: 18,
          fontWeight: "bold",
          color: colors(darkMode).color,
        }}
      >
        <Box width={2} />
        <Box style={{ textAlign: "left" }}>{title}</Box>
      </Box>
      {Content ? (
        <>
          <Box height={1} />
          {Content}
        </>
      ) : (
        <></>
      )}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 8,
          fontSize: 14,
          color: colors(darkMode).color,
        }}
      >
        {`in ${displaySub} by `} {displayName}
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
        <Awards awards={awards} />
      </SimpleGrid>
    </>
  );
};
