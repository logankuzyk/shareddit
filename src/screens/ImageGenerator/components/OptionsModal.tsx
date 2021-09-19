import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import {
  Center,
  Text,
  SimpleGrid,
  ListItem,
  List,
  Flex,
} from "@chakra-ui/react";

import { StyledButton } from "../../shared/components/StyledButton";
import { RedditContext } from "./RedditContext";
import { Toggle } from "./Toggle";
import { FontSelect } from "./FontSelect";
import { RefreshButton } from "./RefreshButton";
import { ScaleSlider } from "./ScaleSlider";
import { CommentsOnlyToggle } from "./CommentsOnlyToggle";

export const OptionsModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    setters: {
      toggleDarkMode,
      toggleUsernames,
      toggleSubreddit,
      toggleCommentsOnly,
    },
    content: { comments },
    darkMode,
    censorUsernames,
    censorSubreddit,
    commentsOnly,
  } = useContext(RedditContext);
  const showCommentsOnlyOption = comments === undefined ? false : true;

  return (
    <StyledButton onClick={onOpen}>
      <SimpleGrid
        paddingLeft={2}
        columns={3}
        columnGap={2}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Center>
          <Text>image options</Text>
        </Center>
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent margin={12}>
          <ModalHeader>Image Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List alignContent="center" spacing={4}>
              <ListItem>
                <Flex direction="row">
                  <Toggle
                    isChecked={censorUsernames}
                    onToggle={toggleUsernames}
                  />
                  <Text marginLeft="auto">Hide usernames</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex direction="row">
                  <Toggle
                    isChecked={censorSubreddit}
                    onToggle={toggleSubreddit}
                  />
                  <Text marginLeft="auto">Hide subreddit</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex direction="row">
                  <Toggle isChecked={darkMode} onToggle={toggleDarkMode} />
                  <Text marginLeft="auto">Dark mode</Text>
                </Flex>
              </ListItem>
              <CommentsOnlyToggle
                onToggle={toggleCommentsOnly}
                isChecked={commentsOnly}
                showCommentsOnlyOption={showCommentsOnlyOption}
                closeModal={onClose}
              />
              <ListItem>
                <Flex direction="row">
                  <FontSelect />
                  <Text marginLeft="auto">Font</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <ScaleSlider />
              </ListItem>
              <ListItem>
                <RefreshButton />
              </ListItem>
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </StyledButton>
  );
};
