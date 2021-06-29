import React, { useContext } from "react";
import { RedditContext } from "../RedditContext";

import { Box, Center } from "@chakra-ui/react";
import { ArrowUpDownIcon, ChatIcon, CalendarIcon } from "@chakra-ui/icons";

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
        borderWidth: 1.5,
        color: darkMode ? "#AAAAAA" : "#001219",
        borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
        backgroundColor: darkMode ? "#4d4d4d" : "#f5f0f0",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 12,
      }}
    >
      <Center>
        <IconTemplate />
        <Box width={2} />
        {text}
      </Center>
    </Box>
  );
};
