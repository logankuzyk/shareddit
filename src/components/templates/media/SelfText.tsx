import React from "react";
import { Flex } from "@chakra-ui/react";

import { useEditorContext } from "../../../contexts/EditorContext";
import { RedditSubmission } from "../../../types/reddit";
import { Paragraph } from "../../typography/Paragraph";

interface SelfTextProps {
  submission: RedditSubmission;
}

export const SelfText: React.FC<SelfTextProps> = ({ submission }) => {
  const { theme } = useEditorContext();
  const { selftext } = submission;

  const backgroundColor = theme.main["100"];
  const borderColor = theme.main["300"];

  if (selftext) {
    return (
      <Flex
        padding={2}
        borderWidth={1}
        borderRadius={4}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      >
        <Paragraph>{selftext}</Paragraph>
      </Flex>
    );
  } else {
    return <></>;
  }
};
