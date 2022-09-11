import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../../contexts/EditorContext";
import {
  censorUsernames,
  censorSubreddits,
} from "../../../../functions/util/censorText";
import { RedditSubmission } from "../../../../types/reddit";
import { Paragraph } from "../../../typography/Paragraph";

interface SelfTextProps {
  submission: RedditSubmission;
}

export const SelfText: React.FC<SelfTextProps> = ({ submission }) => {
  const { theme, isCensorSubreddits, isCensorUsernames } = useEditorData();
  const { selftext_html } = submission;

  const backgroundColor = theme.background["100"];
  const borderColor = theme.background["300"];

  const body =
    selftext_html && isCensorSubreddits && isCensorUsernames
      ? censorSubreddits(censorUsernames(selftext_html))
      : selftext_html && isCensorSubreddits
      ? censorSubreddits(selftext_html)
      : selftext_html && isCensorUsernames
      ? censorUsernames(selftext_html)
      : selftext_html;

  if (selftext_html) {
    return (
      <Flex
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderRadius="8px"
        borderWidth="1px"
        maxWidth="100%"
        padding="8px"
      >
        <Paragraph color={theme.contrast[300]}>
          {body && <a dangerouslySetInnerHTML={{ __html: body }} />}
        </Paragraph>
      </Flex>
    );
  } else {
    return <></>;
  }
};
