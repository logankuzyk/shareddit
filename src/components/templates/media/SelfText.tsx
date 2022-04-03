import React from "react";
import { Flex } from "@chakra-ui/react";

import { RedditSubmission } from "../../../types/reddit";
import { colors } from "../../../styles/colors";

interface SelfTextProps {
  submission: RedditSubmission;
}

export const SelfText: React.FC<SelfTextProps> = ({ submission }) => {
  const { selftext } = submission;

  if (selftext) {
    return (
      <Flex
        padding={8}
        borderWidth={1}
        borderRadius={4}
        backgroundColor={colors.grey["100"]}
        borderColor={colors.grey["300"]}
      >
        <Flex>{selftext}</Flex>
      </Flex>
    );
  } else {
    return <></>;
  }
};
