import React, { useContext } from "react";
import { RedditContext } from "../../RedditContext";

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
        borderWidth: 1,
        color: darkMode ? "#AAAAAA" : "#001219",
        borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
        padding: 8,
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
