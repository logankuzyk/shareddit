import React from "react";
import { ListItem, Flex, Text, Collapse } from "@chakra-ui/react";

import { Toggle } from "./Toggle";
import { CommentSelect } from "./CommentSelect";

interface CommentsOnlyToggleProps {
  isChecked: boolean;
  onToggle: () => void;
  showCommentsOnlyOption: boolean;
  closeModal: () => void;
}

export const CommentsOnlyToggle: React.FC<CommentsOnlyToggleProps> = ({
  isChecked,
  onToggle,
  showCommentsOnlyOption,
  closeModal,
}) => {
  if (!showCommentsOnlyOption) {
    return <></>;
  }

  return (
    <ListItem>
      <Flex direction="row">
        <Toggle isChecked={isChecked} onToggle={onToggle} />
        <Text marginLeft="auto">Comments only</Text>
      </Flex>
      <Collapse in={isChecked}>
        <Flex p={2}>
          <CommentSelect closeModal={closeModal} />
        </Flex>
      </Collapse>
    </ListItem>
  );
};
