import {
  NumberInput as _NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps,
} from "@chakra-ui/react";
import React from "react";

export const NumberInput: React.FC<NumberInputProps> = (props) => {
  return (
    <_NumberInput {...props}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </_NumberInput>
  );
};
