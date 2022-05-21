import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../contexts/EditorContext";
import {
  censorSubreddits,
  censorUsernames,
} from "../../../functions/util/censorText";
import { RedditComment, MoreChildren } from "../../../types/reddit";
import { Paragraph } from "../../typography/Paragraph";
import { Tagline } from "../tagline/Tagline";
import { ChildIndent } from "./ChildIndent";

interface CommentProps {
  data: RedditComment | MoreChildren;
  submissionFullname: string;
  depth?: number;
}

export const Comment: React.FC<CommentProps> = ({
  data,
  submissionFullname,
}) => {
  const { isCensorSubreddits, isCensorUsernames, theme } = useEditorData();
  if (data.type === "comment") {
    const showChildren = true;
    const {
      author,
      date,
      scoreString,
      body: commentBody,
      id,
      flair,
      awards,
      is_submitter,
    } = data;
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
        <ChildIndent depth={depth} id={id}>
          <Flex
            direction="column"
            key={id}
            style={{
              marginTop: 4,
              marginBottom: 4,
            }}
          >
            <Flex>
              <Tagline
                awards={awards}
                censorUser={isCensorUsernames}
                date={date}
                flair={flair}
                isSubmitter={is_submitter}
                score={scoreString}
                type="comment"
                username={author}
              />
            </Flex>
            <Paragraph color={theme.contrast[300]}>{body}</Paragraph>
          </Flex>
        </ChildIndent>
        {showChildren &&
          data.replyTree.map((comment) => (
            <Comment
              data={comment}
              key={comment.id}
              submissionFullname={submissionFullname}
            />
          ))}
      </Flex>
    );
  } else {
    // Comment was more children object
    return <></>;
  }
};
