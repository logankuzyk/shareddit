import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";

import { RedditContext } from "./RedditContext";

interface CommentSelectProps {
  closeModal: () => void;
}

export const CommentSelect: React.FC<CommentSelectProps> = ({ closeModal }) => {
  const {
    setters: { updateVisibleComments },
  } = useContext(RedditContext);

  return (
    <Button
      fontWeight={500}
      marginX="auto"
      onClick={() => {
        updateVisibleComments();
        closeModal();
      }}
    >
      Select comments to display
    </Button>
  );
};
