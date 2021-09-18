import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";

import { Award } from "../../../../types";
import { RedditContext } from "../RedditContext";
import { colors } from "./styles";

interface AwardsProps {
  awards: Award[];
}

export const Awards: React.FC<AwardsProps> = ({ awards }) => {
  const { darkMode } = useContext(RedditContext);
  let totalAwards = awards
    .map((award) => award.count)
    .reduce((a, b) => a + b, 0);

  if (totalAwards === 0) {
    return <></>;
  }

  const awardsToRender = awards.slice(0, 4);

  return (
    <Box
      style={{
        display: "flex",
        borderRadius: "12px",
        // borderWidth: 1,
        color: colors(darkMode).iconTextColor,
        borderColor: colors(darkMode).borderColor,
        backgroundColor: colors(darkMode).iconBackgroundColor,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 12,
      }}
    >
      {awardsToRender.map((award) => {
        totalAwards += award.count;
        return (
          <img
            height={16}
            width={16}
            alt="reddit award"
            onError={(e) => {
              //@ts-ignore
              e.target.style.display = "none";
            }}
            src={`https://server.shareddit.com:8080/${award.src}`}
            key={totalAwards}
          />
        );
      })}
      <Box width={1} />
      {` ${totalAwards} ${totalAwards === 1 ? "award" : "awards"}`}
    </Box>
  );
};
