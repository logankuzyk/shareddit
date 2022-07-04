import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../contexts/EditorContext";
import { useEditorMutation } from "../../contexts/EditorContext";
import { CommentSort, SORT_TYPES } from "../../types/reddit";
import { PrimaryButton } from "../buttons";
import { Seperator } from "../Seperator";
import { EditorOption } from "./EditorOption";
import { EditorOptionSection } from "./EditorOptionSection";
import { MultiSelect } from "./MultiSelect";
import { NumberInput } from "./NumberInput";
import { Toggle } from "./Toggle";

export const EditorInterface: React.FC = () => {
  const {
    isCensorUsernames,
    isCensorSubreddits,
    showComments,
    commentReplies,
    replyDepth,
    topLevelComments,
    commentSort,
  } = useEditorData();
  const { setProperty } = useEditorMutation();

  return (
    <Flex
      alignItems="left"
      backgroundColor="#ffffff"
      borderRadius="8px"
      boxShadow="sm"
      direction="column"
      gap="6px"
      paddingX="18px"
      paddingY="4px"
      textAlign="left"
    >
      <PrimaryButton
        onClick={() => {
          alert("hi");
        }}
      >
        Download Image
      </PrimaryButton>
      <EditorOptionSection label="Privacy">
        <EditorOption label="Censor Usernames">
          <Toggle
            isChecked={isCensorUsernames}
            onChange={() =>
              setProperty("isCensorUsernames", !isCensorUsernames)
            }
          />
        </EditorOption>
        <EditorOption label="Censor Subreddits">
          <Toggle
            isChecked={isCensorSubreddits}
            onChange={() =>
              setProperty("isCensorSubreddits", !isCensorSubreddits)
            }
          />
        </EditorOption>
      </EditorOptionSection>
      <Seperator />
      <EditorOptionSection label="Comments">
        <EditorOption label="Show Comments">
          <Toggle
            isChecked={showComments}
            onChange={() => setProperty("showComments", !showComments)}
          />
        </EditorOption>
        {showComments && (
          <>
            <EditorOption label="Number of Top Level Comments">
              <NumberInput
                defaultValue={topLevelComments}
                max={50}
                min={0}
                onChange={(valueAsString, valueAsNumber) =>
                  setProperty("topLevelComments", valueAsNumber)
                }
              />
            </EditorOption>
            <EditorOption label="Comment Reply Depth">
              <NumberInput
                defaultValue={replyDepth}
                max={50}
                min={0}
                onChange={(valueAsString, valueAsNumber) =>
                  setProperty("replyDepth", valueAsNumber)
                }
              />
            </EditorOption>
            <EditorOption label="Number of Replies to Each Comment">
              <NumberInput
                defaultValue={commentReplies}
                max={50}
                min={0}
                onChange={(valueAsString, valueAsNumber) =>
                  setProperty("commentReplies", valueAsNumber)
                }
              />
            </EditorOption>
            <EditorOption label="Sort">
              <MultiSelect
                defaultValue={commentSort}
                onChange={(event) => {
                  const option = event.target.value as unknown as CommentSort;
                  setProperty("commentSort", option);
                }}
              >
                {SORT_TYPES.map((sort) => (
                  <option key={sort}>{sort}</option>
                ))}
              </MultiSelect>
            </EditorOption>
          </>
        )}
      </EditorOptionSection>
    </Flex>
  );
};
