import React from "react";
import { Flex } from "@chakra-ui/react";

import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Comment } from "./Comment";

interface RootCommentProps {
  data: RedditComment | MoreChildren;
}

export const RootComment: React.FC<RootCommentProps> = ({ data }) => {
  const submissionFullname = data.parent_id;

  return (
    <Flex paddingRight={18} backgroundColor="#FFFFFF">
      <Comment data={data} submissionFullname={submissionFullname} />
    </Flex>
  );
};
