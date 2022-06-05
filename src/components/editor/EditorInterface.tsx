import { Flex, Switch } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../contexts/EditorContext";
import { useEditorMutation } from "../../contexts/EditorContext";
import { PrimaryButton } from "../buttons";
import { Seperator } from "../Seperator";
import { EditorOption } from "./EditorOption";
import { EditorOptionSection } from "./EditorOptionSection";
import { NumberInput } from "./NumberInput";

export const EditorInterface: React.FC = () => {
  const {
    isCensorUsernames,
    isCensorSubreddits,
    showComments,
    commentReplies,
    replyDepth,
    topLevelComments,
  } = useEditorData();
  const { setProperty } = useEditorMutation();

  return (
    <Flex
      alignItems="left"
      backgroundColor="#ffffff"
      borderRadius={8}
      direction="column"
      gap={6}
      justifyContent="center"
      paddingX={18}
      paddingY={4}
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
          <Switch
            isChecked={isCensorUsernames}
            onChange={() =>
              setProperty("isCensorUsernames", !isCensorUsernames)
            }
          />
        </EditorOption>
        <EditorOption label="Censor Subreddits">
          <Switch
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
          <Switch
            isChecked={showComments}
            onChange={() => setProperty("showComments", !showComments)}
          />
        </EditorOption>
        {showComments && (
          <EditorOption label="Number of Top Level Comments">
            <NumberInput
              defaultValue={topLevelComments}
              max={50}
              min={0}
              // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              //   setProperty(
              //     "topLevelComments",
              //     event.currentTarget.valueAsNumber
              //   )
              // }
            />
          </EditorOption>
        )}
        <EditorOption label="Comment Reply Depth">
          <NumberInput
            defaultValue={replyDepth}
            max={50}
            min={0}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   setProperty(
            //     "topLevelComments",
            //     event.currentTarget.valueAsNumber
            //   )
            // }
          />
        </EditorOption>
        <EditorOption label="Number of Replies to Each Comment">
          <NumberInput
            defaultValue={commentReplies}
            max={50}
            min={0}
            // onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            //   setProperty(
            //     "topLevelComments",
            //     event.currentTarget.valueAsNumber
            //   )
            // }
          />
        </EditorOption>
      </EditorOptionSection>
    </Flex>
  );
};
