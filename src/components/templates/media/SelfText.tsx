import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../contexts/EditorContext";
import {
  censorUsernames,
  censorSubreddits,
} from "../../../functions/util/censorText";
import { RedditSubmission } from "../../../types/reddit";
import { Paragraph } from "../../typography/Paragraph";

interface SelfTextProps {
  submission: RedditSubmission;
}

export const SelfText: React.FC<SelfTextProps> = ({ submission }) => {
  const { theme, isCensorSubreddits, isCensorUsernames } = useEditorData();
  const { selftext } = submission;

  const backgroundColor = theme.background["100"];
  const borderColor = theme.background["300"];

  const body =
    selftext && isCensorSubreddits && isCensorUsernames
      ? censorSubreddits(censorUsernames(selftext))
      : selftext && isCensorSubreddits
      ? censorSubreddits(selftext)
      : selftext && isCensorUsernames
      ? censorUsernames(selftext)
      : selftext;

  if (selftext) {
    return (
      <Flex
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius={8}
        borderWidth={1}
        padding={2}
      >
        <Paragraph color={theme.contrast[300]}>{body}</Paragraph>
      </Flex>
    );
  } else {
    return <></>;
  }
};
