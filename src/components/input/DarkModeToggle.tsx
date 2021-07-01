import React, { useContext } from "react";
import { Switch, Stack, Text } from "@chakra-ui/react";

import { RedditContext } from "../RedditContext";

export const Toggle: React.FC = () => {
  const {
    setters: { toggleDarkMode },
  } = useContext(RedditContext);

  return (
    <Stack direction="row">
      <Text>Dark mode</Text>
      <Switch size="md" onChange={toggleDarkMode} defaultChecked={false} />
    </Stack>
  );
};
