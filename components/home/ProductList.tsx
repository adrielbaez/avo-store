import { Stack } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { PropsProducts } from "../../pages";
import { AvocadoCard } from "./AvocadoCard";

export const ProductList: NextPage<PropsProducts> = ({ productsList }) => {
  return (
    <Stack
      flexDirection={"row"}
      justify={["center", "center", "space-evenly", "space-between"]}
      flexWrap="wrap"
      gap={4}
      mt={8}
    >
      {productsList ? (
        productsList.map((product, index) => {
          return <AvocadoCard product={product} key={product.id} />;
        })
      ) : (
        <div>No products</div>
      )}
    </Stack>
  );
};
