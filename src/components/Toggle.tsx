import { Switch } from "@chakra-ui/react";
import React from "react";

interface ToggleProps {
  onToggle: () => void;
  isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ onToggle, isChecked }) => {
  return <Switch isChecked={isChecked} size="md" onChange={onToggle} />;
};
