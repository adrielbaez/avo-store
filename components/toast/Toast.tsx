import { Button, useToast } from "@chakra-ui/react";

interface Props {
  title: string;
  status: "success" | "warning" | "error" | "info";
}
export const Toast = ({ status, title }: Props) => {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title,
          status,
          duration: 1500,
          isClosable: true,
          position: "top-right",
        })
      }
    >
      Show Toast
    </Button>
  );
};
