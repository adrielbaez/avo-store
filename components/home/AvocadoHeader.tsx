import { Fade, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { count } from "console";
import React, { useEffect, useState } from "react";
import { useAvocadoAnimated } from "../hooks/useAvocadoAnimated";
import { Avocado, DeadAvocado } from "../SVGIcons";
import { ModalAvocado } from "./Modal";

export const AvocadoHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { classCurrent, setCount, setClassCurrent, isAlive, setisAlive } =
    useAvocadoAnimated();

  useEffect(() => {
    if (!isAlive) {
      onOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAlive]);

  return (
    <Stack flexDirection="row" alignItems="center" justify="center" mt={8}>
      <Text fontSize={40} fontWeight="bold">
        Avo
      </Text>
      <Stack
        flexDirection="row"
        alignItems="center"
        justify="center"
        className={classCurrent}
        onClick={() => {
          setCount((prevState) => prevState + 1);
          setClassCurrent("");
        }}
      >
        {isAlive ? (
          <Avocado size="45px" />
        ) : (
          <Fade in={true}>
            <DeadAvocado size="45px" />
          </Fade>
        )}
      </Stack>

      <Text fontSize={40} fontWeight="bold">
        Store
      </Text>
      <ModalAvocado
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        setCount={setCount}
        setisAlive={setisAlive}
      />
    </Stack>
  );
};
