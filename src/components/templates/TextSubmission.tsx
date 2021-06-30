import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";

import { Text } from "./Text";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../types";
import { RedditContext } from "../RedditContext";
import { colors } from "./styles";

export const TextSubmission: React.FC<FleshedRedditSubmission> = ({
  bodyHTML,
  ...props
}) => {
  const { darkMode } = useContext(RedditContext);

  return (
    <>
      <Title
        {...props}
        Content={
          <Box
            style={{
              display: "flex",
              borderRadius: "12px",
              borderWidth: 1,
              borderColor: colors(darkMode).borderColor,
              padding: 4,
              flexDirection: "column",
              fontFamily: "sans",
              fontSize: 16,
              margin: 4,
            }}
          >
            {bodyHTML !== null ? (
              <Text {...props} bodyHTML={bodyHTML} />
            ) : (
              <></>
            )}
          </Box>
        }
      />
    </>
  );
};
