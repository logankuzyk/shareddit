import React from "react";
import { Flex, Switch } from "@chakra-ui/react";

import { EditorOption } from "./EditorOption";
import { useEditorData } from "../../contexts/EditorContext";
import { useEditorMutation } from "../../contexts/EditorContext";
import { Seperator } from "../Seperator";

interface EditorInterfaceProps {}

export const EditorInterface: React.FC<EditorInterfaceProps> = () => {
  const {
    fontSize,
    imageScale,
    isCensorUsernames,
    isCensorSubreddits,
    theme,
    showComments,
  } = useEditorData();
  const { setProperty } = useEditorMutation();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      textAlign="left"
      borderRadius={8}
      gap={2}
      paddingX={18}
      paddingY={4}
      alignItems="left"
      backgroundColor="#ffffff"
    >
      <EditorOption label="Censor Usernames">
        <Switch
          onChange={() => setProperty("isCensorUsernames", !isCensorUsernames)}
          isChecked={isCensorUsernames}
        />
      </EditorOption>
      <Seperator />
      <EditorOption label="Censor Subreddits">
        <Switch
          onChange={() =>
            setProperty("isCensorSubreddits", !isCensorSubreddits)
          }
          isChecked={isCensorSubreddits}
        />
      </EditorOption>
    </Flex>
  );
};
