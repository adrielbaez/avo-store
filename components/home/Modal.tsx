import {
  Modal,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { DeadAvocado } from "../SVGIcons";

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
  setCount: (count: number) => void;
  setisAlive: (isAlive: boolean) => void;
}
export const ModalAvocado = ({
  onOpen,
  isOpen,
  onClose,
  setCount,
  setisAlive,
}: ModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Oh No! You killed the avocado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack flexDirection="row">
              <DeadAvocado size="100px" />
              <Stack>
                <Text>You touched him so much</Text>
                <Text mt={4}>
                  {`By the way, you're a very curious person and you discovered this`}{" "}
                </Text>
              </Stack>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setCount(0);
                setisAlive(true);
                onClose();
              }}
            >
              Resurrect Him
            </Button>
            <Button variant="ghost" onClick={onClose}>
              No, Sorry
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
