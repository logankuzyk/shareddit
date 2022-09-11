import { Flex } from "@chakra-ui/react";
import React from "react";

import { RedditComment, MoreChildren } from "../../../../types/reddit";
import { Comment } from "./Comment";

interface RootCommentProps {
  data: RedditComment | MoreChildren;
}

export const RootComment: React.FC<RootCommentProps> = ({ data }) => {
  const submissionFullname = data.parent_id;

  return (
    <Flex paddingBottom="4px" paddingLeft="18px" paddingRight="18px">
      <Comment data={data} submissionFullname={submissionFullname} />
    </Flex>
  );
};
