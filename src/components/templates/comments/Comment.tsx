import React, { useState, useMemo, useCallback } from "react";
import { Flex } from "@chakra-ui/react";
// import { View, TouchableOpacity } from "react-native";

import { ChildIndent } from "./ChildIndent";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Tagline } from "../Tagline";

interface CommentProps {
  data: RedditComment | MoreChildren;
  submissionFullname: string;
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({
  data,
  submissionFullname,
}) => {
  if (data.type === "comment") {
    const showChildren = true;
    const { author, date, scoreString, body } = data;
    const depth = data.depth ? data.depth : 0;
    const paddingRight = depth * 18;

    return (
      <>
        <ChildIndent depth={depth}>
          <Flex
            key={data.id}
            style={{ paddingLeft: 18, paddingRight, marginTop: 6 }}
          >
            <Flex marginBottom={8} flexDirection="column">
              <Flex marginTop={8}>
                <Tagline content={[author, scoreString, date]} type="comment" />
              </Flex>
              <Flex>{body}</Flex>
            </Flex>
          </Flex>
        </ChildIndent>
        {showChildren ? (
          data.replyTree.map((comment) => (
            <Comment
              data={comment}
              submissionFullname={submissionFullname}
              key={comment.id}
            />
          ))
        ) : (
          <></>
        )}
      </>
    );
  } else {
    // Comment was more children object
    return <></>;
  }
};
