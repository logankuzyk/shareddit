import React from "react";
import { Flex } from "@chakra-ui/react";

import { useEditorContext } from "../../../contexts/EditorContext";
import { RedditSubmission } from "../../../types/reddit";
import { Paragraph } from "../../typography/Paragraph";
import {
  censorUsernames,
  censorSubreddits,
} from "../../../functions/util/censorText";

interface SelfTextProps {
  submission: RedditSubmission;
}

export const SelfText: React.FC<SelfTextProps> = ({ submission }) => {
  const { theme, isCensorSubreddits, isCensorUsernames } = useEditorContext();
  const { selftext } = submission;

  const backgroundColor = theme.main["100"];
  const borderColor = theme.main["300"];

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
        padding={2}
        borderWidth={1}
        borderRadius={4}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        <Paragraph>{body}</Paragraph>
      </Flex>
    );
  } else {
    return <></>;
  }
};
