import { Flex, Switch } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../contexts/EditorContext";
import { useEditorMutation } from "../../contexts/EditorContext";
import { PrimaryButton } from "../input/buttons";
import { Seperator } from "../Seperator";
import { EditorOption } from "./EditorOption";
import { EditorOptionSection } from "./EditorOptionSection";

export const EditorInterface: React.FC = () => {
  const { isCensorUsernames, isCensorSubreddits } = useEditorData();
  const { setProperty } = useEditorMutation();

  return (
    <Flex
      alignItems="left"
      backgroundColor="#ffffff"
      borderRadius={8}
      direction="column"
      gap={2}
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
        <Seperator />
        <EditorOption label="Censor Subreddits">
          <Switch
            isChecked={isCensorSubreddits}
            onChange={() =>
              setProperty("isCensorSubreddits", !isCensorSubreddits)
            }
          />
        </EditorOption>
      </EditorOptionSection>
    </Flex>
  );
};
