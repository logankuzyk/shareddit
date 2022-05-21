import { Flex } from "@chakra-ui/react";
import React from "react";

import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Comment } from "./Comment";

interface RootCommentProps {
  data: RedditComment | MoreChildren;
}

export const RootComment: React.FC<RootCommentProps> = ({ data }) => {
  const submissionFullname = data.parent_id;

  return (
    <Flex paddingBottom={4} paddingLeft={18} paddingRight={18}>
      <Comment data={data} submissionFullname={submissionFullname} />
    </Flex>
  );
};
