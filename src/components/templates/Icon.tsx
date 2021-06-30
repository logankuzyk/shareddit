import React, { useContext } from "react";
import { Box, Center } from "@chakra-ui/react";
import { ArrowUpDownIcon, ChatIcon, CalendarIcon } from "@chakra-ui/icons";

import { RedditContext } from "../RedditContext";
import { colors } from "./styles";

interface IconProps {
  icon: "vote" | "comment" | "date";
  text: string;
}

export const Icon: React.FC<IconProps> = ({ icon, text }) => {
  const { darkMode } = useContext(RedditContext);

  let IconTemplate: React.FC<any>;

  switch (icon) {
    case "vote":
      IconTemplate = ArrowUpDownIcon;
      break;
    case "comment":
      IconTemplate = ChatIcon;
      break;
    case "date":
      IconTemplate = CalendarIcon;
      break;
  }

  return (
    <Box
      style={{
        display: "flex",
        borderRadius: "12px",
        borderWidth: 1,
        color: colors(darkMode).color,
        borderColor: colors(darkMode).borderColor,
        backgroundColor: colors(darkMode).iconBackgroundColor,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 12,
      }}
    >
      <Center>
        <IconTemplate />
        <Box width={1} />
        {text}
      </Center>
    </Box>
  );
};
