import React from "react";
import { Flex } from "@chakra-ui/react";

import { useEditorContext } from "../../../contexts/EditorContext";
import {
  censorSubreddits,
  censorUsernames,
} from "../../../functions/util/censorText";
import { ChildIndent } from "./ChildIndent";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Tagline } from "../Tagline";
import { Paragraph } from "../../typography/Paragraph";

interface CommentProps {
  data: RedditComment | MoreChildren;
  submissionFullname: string;
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({
  data,
  submissionFullname,
}) => {
  const { isCensorSubreddits, isCensorUsernames } = useEditorContext();
  if (data.type === "comment") {
    const showChildren = true;
    const { author, date, scoreString, body: commentBody } = data;
    const depth = data.depth ? data.depth : 0;

    const body =
      commentBody && isCensorSubreddits && isCensorUsernames
        ? censorSubreddits(censorUsernames(commentBody))
        : commentBody && isCensorSubreddits
        ? censorSubreddits(commentBody)
        : commentBody && isCensorUsernames
        ? censorUsernames(commentBody)
        : commentBody;

    return (
      <Flex direction="column">
        <ChildIndent depth={depth}>
          <Flex
            key={data.id}
            style={{
              marginTop: 4,
              marginBottom: 4,
            }}
            flexDirection="column"
          >
            <Flex>
              <Tagline
                username={author}
                score={scoreString}
                date={date}
                type="comment"
              />
            </Flex>
            <Paragraph>{body}</Paragraph>
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
      </Flex>
    );
  } else {
    // Comment was more children object
    return <></>;
  }
};
