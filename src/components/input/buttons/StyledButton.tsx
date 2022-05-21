import { Button } from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import React from "react";

interface StyledButtonProps {
  onClick?: () => void;
  style?: CSSProperties;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  onClick = () => {},
  style,
  ...props
}) => {
  return (
    <Button
      _focus={{ borderColor: "brand.focus" }}
      _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      backgroundColor={"brand.highlights"}
      border="4px"
      borderColor={"brand.highlights"}
      borderRadius="12px"
      color="brand.input"
      colorScheme="button"
      minHeight="64px"
      size="lg"
      style={style}
      width="100%"
      //@ts-ignore
      onClick={onClick}
      {...props}
    />
  );
};
