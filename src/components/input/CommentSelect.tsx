import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";

import { RedditContext } from "../RedditContext";

export const CommentSelect: React.FC = () => {
  const {
    commentsOnly,
    setters: { updateVisibleComments },
  } = useContext(RedditContext);

  return (
    <Button
      fontWeight={500}
      isDisabled={!commentsOnly}
      onClick={() => {
        updateVisibleComments();
      }}
    >
      Select comments to display
    </Button>
  );
};
