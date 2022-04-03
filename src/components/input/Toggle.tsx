import React from "react";
import { Switch } from "@chakra-ui/react";

interface ToggleProps {
  onToggle: () => void;
  isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ onToggle, isChecked }) => {
  return <Switch size="md" onChange={onToggle} isChecked={isChecked} />;
};
