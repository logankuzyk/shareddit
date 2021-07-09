import React, { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

import { RedditContext } from "./RedditContext";
import { Toggle } from "./input/Toggle";
import { ScaleSlider } from "./input/ScaleSlider";

export const OptionsMenu: React.FC = () => {
  const {
    setters: { toggleDarkMode, toggleUsernames, toggleSubreddit },
  } = useContext(RedditContext);

  return (
    <Menu matchWidth={false} placement="top" closeOnSelect={false}>
      <MenuButton
        fontWeight="semibold"
        size="lg"
        fontSize="lg"
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
      >
        image options
      </MenuButton>
      <MenuList alignContent="center">
        <MenuItem>
          <Toggle onToggle={toggleUsernames} />
          <Text marginLeft="auto">Hide usernames</Text>
        </MenuItem>
        <MenuItem>
          <Toggle onToggle={toggleSubreddit} />
          <Text marginLeft="auto">Hide subreddit</Text>
        </MenuItem>
        <MenuItem>
          <Toggle onToggle={toggleDarkMode} />
          <Text marginLeft="auto">Dark mode</Text>
        </MenuItem>
        <MenuItem>
          <ScaleSlider />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
