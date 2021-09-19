import React, { useContext } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
import { CommentSelect } from "./CommentSelect";
import { RefreshButton } from "./RefreshButton";
import { ScaleSlider } from "./ScaleSlider";

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
                  <Toggle onToggle={toggleUsernames} />
                  <Text marginLeft="auto">Hide usernames</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex direction="row">
                  <Toggle onToggle={toggleSubreddit} />
                  <Text marginLeft="auto">Hide subreddit</Text>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex direction="row">
                  <Toggle onToggle={toggleDarkMode} />
                  <Text marginLeft="auto">Dark mode</Text>
                </Flex>
              </ListItem>
              {showCommentsOnlyOption ? (
                <>
                  <ListItem>
                    <Flex direction="row">
                      <Toggle onToggle={toggleCommentsOnly} />
                      <Text marginLeft="auto">Comments only</Text>
                    </Flex>
                  </ListItem>
                </>
              ) : (
                <></>
              )}
              <ListItem>
                <FontSelect />
              </ListItem>
              <ListItem>
                <CommentSelect />
              </ListItem>
              <ListItem>
                <RefreshButton />
              </ListItem>
              <ListItem>
                <ScaleSlider />
              </ListItem>
            </List>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </StyledButton>
  );
};
