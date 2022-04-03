import React from "react";
import { Flex } from "@chakra-ui/react";

import { Caption } from "../typography/Caption";

interface TaglineProps {
  content: Array<string>;
  type: "submission" | "comment";
}

export const Tagline: React.FC<TaglineProps> = ({ content }) => {
  return (
    <Flex
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {content.map((item, index, array) => {
        if (index !== array.length - 1) {
          return <Caption key={index.toString()}>{item} • </Caption>;
        } else {
          return <Caption key={index.toString()}>{item}</Caption>;
        }
      })}
    </Flex>
  );
};
