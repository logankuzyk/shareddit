import React, { useContext } from "react";
import { Select } from "@chakra-ui/react";

import { RedditContext } from "../RedditContext";

export const FontSelect: React.FC = () => {
  const {
    setters: { updateFont },
  } = useContext(RedditContext);

  return (
    <Select
      id="font-select"
      width="auto"
      onChange={(e) => {
        const node = document.getElementById("font-select");
        //@ts-ignore
        const fontName = node ? node.value : null;
        updateFont(fontName);
      }}
    >
      <option value="Ubuntu">Ubuntu</option>
      <option value="Roboto">Roboto</option>
      <option value="Varela Round">Varela Round</option>
    </Select>
  );
};
