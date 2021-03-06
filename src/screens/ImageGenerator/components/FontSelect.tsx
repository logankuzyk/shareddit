import React, { useContext } from "react";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Text,
  Button,
} from "@chakra-ui/react";

import { RedditContext } from "./RedditContext";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const FontSelect: React.FC = () => {
  const {
    setters: { updateFont },
    font,
  } = useContext(RedditContext);

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            defaultValue={font}
          >
            <Text style={{ fontWeight: 500 }}>{font}</Text>
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                updateFont("Ubuntu");
              }}
            >
              Ubuntu
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateFont("Varela Round");
              }}
            >
              Varela Round
            </MenuItem>
            <MenuItem
              onClick={() => {
                updateFont("Roboto");
              }}
            >
              Roboto
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
