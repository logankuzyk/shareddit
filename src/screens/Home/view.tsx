import { Flex, Grid } from "@chakra-ui/react";
import React, { useState, ChangeEvent, FormEvent } from "react";

import { PrimaryButton } from "../../components/buttons";
import { Input } from "../../components/Input";
import { Title, Caption, Paragraph } from "../../components/typography/";
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
    <Grid columnGap="24px" templateColumns="1fr 720px 1fr">
      <b style={{ gridColumn: 1 }} />
      <Flex direction="column" gap="24px" gridColumn="2">
        <Title>The reddit screenshot tool.</Title>
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
        <Paragraph>
          shareddit helps you capture the whole context of the reddit post with
          a single image. No more cropping, no more scribbling out usernames,
          shareddit is an all-in-one tool to save or share your favorite reddit
          moments.
        </Paragraph>
      </Flex>
      <b style={{ gridColumn: 3 }} />
    </Grid>
  );
};
