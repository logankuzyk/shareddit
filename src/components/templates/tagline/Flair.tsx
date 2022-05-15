import React from "react";
import { Flex } from "@chakra-ui/react";

import { RedditFlair } from "../../../types/reddit";
import { Caption } from "../../typography/Caption";

interface FlairProps {
  flair: RedditFlair;
}

export const Flair: React.FC<FlairProps> = ({ flair }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={2}
      borderWidth={1}
      borderRadius={4}
      padding={1}
      backgroundColor={flair.backgroundColor}
      shrink={1}
    >
      <img
        style={{
          display: "flex",
          width: "1em",
          height: "1em",
        }}
        src={flair.img}
        alt="flair icon"
      />
      <Caption>{flair.text}</Caption>
    </Flex>
  );
};
