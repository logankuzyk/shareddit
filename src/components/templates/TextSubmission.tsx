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
      <Title {...props} />
      <Box
        style={{
          display: "flex",
          borderRadius: "12px",
          borderWidth: 1,
          padding: 8,
          flexDirection: "column",
          fontFamily: "sans",
          width: "100%",
          fontSize: 16,
        }}
      >
        <Text {...props} bodyHTML={bodyHTML} />
      </Box>
    </>
  );
};
