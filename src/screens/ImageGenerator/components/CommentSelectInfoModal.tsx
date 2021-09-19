import React, { useContext, useEffect } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import { RedditContext } from "./RedditContext";

export const CommentSelectInfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { searchingForComment } = useContext(RedditContext);

  useEffect(() => {
    if (searchingForComment) {
      onOpen();
      setTimeout(onClose, 3000);
    }
  }, [searchingForComment, onClose, onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Heads up!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Click on the first comment you want to include in the image, then
          click on the last.
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
