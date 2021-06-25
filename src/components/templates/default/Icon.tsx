import React, { useContext } from "react";
import { RedditContext } from "../../RedditContext";

import { Box } from "@chakra-ui/react";
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
        borderWidth: "4px",
        color: darkMode ? "#AAAAAA" : "#AAAAAA",
        borderColor: darkMode ? "#AAAAAA" : "#AAAAAA",
        padding: 8,
      }}
    >
      <IconTemplate />
      {text}
    </Box>
  );
};
