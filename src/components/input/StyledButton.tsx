import React from "react";
import { Button } from "@chakra-ui/react";

interface StyledButtonProps {
  onClick?: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  onClick = () => {},
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      size="lg"
      minHeight="64px"
      color="brand.input"
      backgroundColor={"brand.highlights"}
      border="4px"
      borderColor={"brand.highlights"}
      width="100%"
      borderRadius="12px"
      colorScheme="button"
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      _focus={{ borderColor: "brand.focus" }}
      {...props}
    />
  );
};
