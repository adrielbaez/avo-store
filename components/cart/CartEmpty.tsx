import { Box, Heading, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export const Info = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Cart is empty
      </Heading>
      <Text color={"gray.500"}>
        Please add some items to your cart to continue.
      </Text>
    </Box>
  );
};
