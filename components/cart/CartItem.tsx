import {
  Button,
  CloseButton,
  Flex,
  Link,
  Select,
  SelectProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
// import { PriceTag } from './PriceTag'
// import { CartProductMeta } from './CartProductMeta'
import { SingleAvocado } from "../../interfaces/avocados/avocados";
import { CartItem as CartItemInterface } from "../../interfaces/cart";
import { CartProductMeta } from "./CartProductMeta";
import { PriceTag } from "./PriceTag";

type CartItemProps = {
  product: CartItemInterface;
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
  const { removeProductFromCart, modifyQuantity } = useContext(CartContext);
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={product.name}
        description={product.description}
        image={product.image}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <QuantitySelect
          value={product.quantity}
          onChange={(e) => {
            setQuantitySelect?.(+e.currentTarget.value);
            modifyQuantity(product.id, +e.currentTarget.value);
          }}
        />
        <PriceTag price={product.price} currency={"USD"} />
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => removeProductFromCart(product)}
        >
          X
        </Button>
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
