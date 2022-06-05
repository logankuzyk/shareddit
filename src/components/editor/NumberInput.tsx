import {
  NumberInput as _NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps as _NumberInputProps,
} from "@chakra-ui/react";
import React from "react";

export interface NumberInputProps extends _NumberInputProps {
  defaultValue: number;
  min?: number;
  max?: number;
  onChange?: () => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  defaultValue,
  max,
  min,
}) => {
  return (
    <_NumberInput defaultValue={defaultValue} max={max} min={min} size="sm">
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </_NumberInput>
  );
};
