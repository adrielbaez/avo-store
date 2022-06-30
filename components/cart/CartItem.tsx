import {
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
// import { PriceTag } from './PriceTag'
// import { CartProductMeta } from './CartProductMeta'
import { SingleAvocado } from "../../interfaces/avocados/avocados";
import { CartProductMeta } from "./CartProductMeta";
import { PriceTag } from "./PriceTag";

type CartItemProps = {
  product: SingleAvocado;
  //   onChangeQuantity?: (quantity: number) => void
  //   onClickGiftWrapping?: () => void
  //   onClickDelete?: () => void
};

const QuantitySelect = (props: SelectProps) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  );
};

export const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const [quantitySelect, setQuantitySelect] = useState(1);
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={product.name}
        description={product.attributes.description}
        image={product.image}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={quantitySelect}
          onChange={(e) => {
            setQuantitySelect?.(+e.currentTarget.value);
          }}
        />
        <PriceTag price={product.price * quantitySelect} currency={"USD"} />
        <CloseButton aria-label={`Delete ${product.name} from cart`} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        {/* <QuantitySelect
          value={2}
          //   onChange={(e) => {
          //     onChangeQuantity?.(+e.currentTarget.value)
          //   }}
        /> */}
        <PriceTag price={product.price * quantitySelect} currency={"USD"} />
      </Flex>
    </Flex>
  );
};