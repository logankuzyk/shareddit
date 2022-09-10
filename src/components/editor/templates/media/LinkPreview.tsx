import { LinkIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../../contexts/EditorContext";
import { RedditSubmission } from "../../../../types/reddit";
import { Caption } from "../../../typography";
import { Image } from "./Image";

interface LinkPreviewProps {
  submission: RedditSubmission;
}
export const LinkPreview: React.FC<LinkPreviewProps> = ({ submission }) => {
  const { preview, url: link } = submission;
  const { theme } = useEditorData();

  if (!preview) {
    return <></>;
  }

  const { url } = preview.images[0].source;
  const host = link ? new URL(link).host : "";

  return (
    <Flex borderRadius="8px" borderWidth="1px" overflow="hidden">
      <Flex justifyContent="center" position="relative">
        <Image src={url} />
        <Flex
          alignItems="center"
          backgroundColor="rgba(0,0,0,0.3)"
          bottom="0"
          gap="4px"
          height="16px"
          justifyContent="center"
          position="absolute"
          width="100%"
        >
          <LinkIcon color={theme.background[400]} height="14px" />
          <Caption color={theme.background[400]}>{host}</Caption>
        </Flex>
      </Flex>
    </Flex>
  );
};
