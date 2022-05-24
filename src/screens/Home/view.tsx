import { Flex } from "@chakra-ui/react";
import React, { useState, ChangeEvent, FormEvent } from "react";

import { PrimaryButton } from "../../components/buttons";
import { Input } from "../../components/Input";
import { Title, Caption } from "../../components/typography/";
import { lightTheme } from "../../styles/themes";

interface HomeScreenViewProps {
  onSubmit: (input: string) => void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (newInput: string) => {
    setInput(newInput);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    try {
      setError("");
      onSubmit(input);
    } catch (error: unknown) {
      setError((error as Error).message);
    }
  };

  return (
    <Flex direction="column" gap="24px">
      <Title>The best way to screenshot reddit content.</Title>
      <form
        style={{ display: "flex", gap: 8, flexDirection: "column" }}
        onSubmit={(event: FormEvent) => handleSubmit(event)}
      >
        <Input
          placeholder="reddit url"
          value={input}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event.currentTarget.value)
          }
        />
        <PrimaryButton
          role="submit"
          onClick={(event: FormEvent) => handleSubmit(event)}
        >
          Generate Image
        </PrimaryButton>
      </form>
      <Caption color={lightTheme.accents[100]}>{error}</Caption>
    </Flex>
  );
};
