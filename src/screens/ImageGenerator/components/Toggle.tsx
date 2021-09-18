import React from "react";
import { Switch } from "@chakra-ui/react";

interface ToggleProps {
  onToggle: () => void;
}

export const Toggle: React.FC<ToggleProps> = ({ onToggle }) => {
  return <Switch size="md" onChange={onToggle} defaultChecked={false} />;
};
