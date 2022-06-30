import { List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { Attributes as AttributesInterface } from "../../interfaces/avocados";

export const ProductAttributes = ({
  description,
  ...attributes
}: AttributesInterface) => {
  return (
    <List spacing={2}>
      {Object.keys(attributes).map((key) => {
        if (key !== "description") {
          return (
            <ListItem display={"flex"} key={key}>
              <Text
                fontSize={"lg"}
                fontWeight={"bold"}
                textTransform={"capitalize"}
              >
                {key}:
              </Text>
              <Text ml={2} fontSize={"lg"}>
                {attributes[key as keyof typeof attributes]}
              </Text>
            </ListItem>
          );
        }
      })}
    </List>
  );
};
