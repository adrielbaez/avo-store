import { Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { Avocado, Basket } from "../SVGIcons";

export const Navbar = () => {
  const router = useRouter();
  const handleRouteChange = (route: string) => {
    router.push(route);
  };
  return (
    <Stack alignItems={"center"}>
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        width={["100%", "100%", "100%"]}
        maxWidth="1200px"
        paddingY={2}
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
      >
        <Stack
          flexDirection="row"
          alignItems={"center"}
          cursor="pointer"
          onClick={() => handleRouteChange("/")}
        >
          <Avocado size="40px" />
          <Text fontSize="xl" fontWeight="bold">
            Avo - Store
          </Text>
        </Stack>
        <Stack
          flexDirection="row"
          alignItems={"center"}
          cursor="pointer"
          onClick={() => handleRouteChange("/cart")}
        >
          <Basket size="40px" />
          <Text fontSize="xl" fontWeight="bold">
            Cart
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
