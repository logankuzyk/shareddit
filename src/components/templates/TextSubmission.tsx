import React from "react";
import { Box } from "@chakra-ui/react";

import { Text } from "./Text";
import { Title } from "./Title";

import { FleshedRedditSubmission } from "../../types";

export const TextSubmission: React.FC<FleshedRedditSubmission> = ({
  bodyHTML,
  ...props
}) => {
  if (bodyHTML === null) return <></>;

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
              borderColor: "#AAAAAA",
              padding: 4,
              flexDirection: "column",
              fontFamily: "sans",
              fontSize: 16,
              margin: 4,
            }}
          >
            <Text {...props} bodyHTML={bodyHTML} />
          </Box>
        }
      />
    </>
  );
};
