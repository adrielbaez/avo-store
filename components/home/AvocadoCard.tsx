import { Badge, Stack, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { SingleAvocado } from "../../interfaces/avocados/avocados";

interface Props {
  product: SingleAvocado;
}
export const AvocadoCard: NextPage<Props> = ({ product }) => {
  return (
    <Stack
      width="250px"
      height="350px"
      borderTopLeftRadius={50}
      borderBottomRightRadius={50}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
      className="card-avocado"
      bg={"white"}
      padding={2}
      m={"0px !important"}
      cursor="pointer"
    >
      <Stack>
        <Stack
          position="relative"
          width="100%"
          height="200px"
          borderTopRightRadius={"xl"}
          borderTopLeftRadius={50}
          overflow="hidden"
        >
          <Image
            src={product.image}
            priority
            objectFit="cover"
            layout="fill"
            alt="dasadf"
          />
        </Stack>
        <Stack>
          <Badge variant="subtle" colorScheme="red" w={10}>
            New
          </Badge>
          <Text fontSize={"xl"} fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize={"lg"}>Price: ${product.price}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
