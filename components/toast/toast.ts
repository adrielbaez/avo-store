import { createStandaloneToast } from "@chakra-ui/toast";
const { ToastContainer, toast } = createStandaloneToast();
interface Props {
  title: string;
  status: "success" | "warning" | "error" | "info";
  duration?: number;
}
export const toastCustom = ({ status, title, duration = 2000 }: Props) => {
  return toast({
    title,
    status,
    duration,
    isClosable: true,
    position: "top-right",
  });
};
