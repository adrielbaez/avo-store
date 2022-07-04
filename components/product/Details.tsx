import { useContext, useReducer, useState } from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { CartContext } from "../../context/cart";
import { SingleAvocado } from "../../interfaces/avocados";
import { ProductAttributes } from "./Attributes";
import { CartItem } from "../../interfaces/cart/cartInterface";
import { productAlreadyInCart } from "../../utils/products";
import { createStandaloneToast } from "@chakra-ui/toast";
import { toastCustom } from "../toast/toast";
const { ToastContainer } = createStandaloneToast();
interface Props {
  product: SingleAvocado;
}
export const Details: NextPage<Props> = ({ product }) => {
  const { cart, addProductToCart, removeProductFromCart } =
    useContext(CartContext);
  console.log(cart);

  const handleProductCart = () => {
    const { attributes, sku, ...rest } = product;
    const productToAdd: CartItem = {
      ...rest,
      description: attributes.description,
      quantity: 1,
    };

    if (!productAlreadyInCart(cart, productToAdd)) {
      addProductToCart(productToAdd);
      toastCustom({ title: "Product added to cart", status: "success" });
      return;
    }
    toastCustom({ title: "Product removed", status: "info" });
    return removeProductFromCart(productToAdd);
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 18 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack align="start" spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                About this avocado
              </Text>
              <Text fontSize={"lg"}>{product.attributes.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <ProductAttributes {...product.attributes} />
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleProductCart}
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove to cart"
              : "Add to cart"}
          </Button>

          {/* <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack> */}
        </Stack>
      </SimpleGrid>
      <ToastContainer />
    </Container>
  );
};
