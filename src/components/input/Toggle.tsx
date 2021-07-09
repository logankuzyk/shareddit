import React, { useContext } from "react";
import { Switch, Stack, Text } from "@chakra-ui/react";

import { RedditContext } from "../RedditContext";

interface ToggleProps {
  onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ onToggle }) => {
  return <Switch size="md" onChange={onToggle} defaultChecked={false} />;
};
