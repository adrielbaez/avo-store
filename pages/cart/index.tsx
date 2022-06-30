import { GetStaticProps, NextPage } from "next";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/layouts";
import { apiAvocado } from "../../components/api";
import { AvocadosResponse, SingleAvocado } from "../../interfaces/avocados";
import { CartItem, CartOrderSummary } from "../../components/cart";
import Link from "next/link";

export interface PropsProducts {
  productsList: SingleAvocado[];
}
const index: NextPage<PropsProducts> = ({ productsList }) => {
  return (
    <Layout title="Cart - Store">
      <Box
        maxW={{ base: "3xl", lg: "7xl" }}
        mx="auto"
        px={{ base: "4", md: "8", lg: "12" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
          spacing={{ base: "8", md: "16" }}
        >
          <Stack spacing={{ base: "8", md: "10" }} flex="2">
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart (3 items)
            </Heading>

            <Stack spacing="6">
              {productsList.slice(0, 2).map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link href={"/"} passHref>
                <ChakraLink color={mode("blue.500", "blue.200")}>
                  Continue shopping
                </ChakraLink>
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await apiAvocado.get<AvocadosResponse>("/avo");

  return {
    props: {
      productsList: data.data,
    },
  };
};

export default index;
