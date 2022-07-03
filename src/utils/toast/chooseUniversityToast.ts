import { UseToastOptions } from "@chakra-ui/react";

const warningToastOptions = (text: string): UseToastOptions => {
  return {
    position: "top",
    title: "Uwaga!",
    description: text,
    isClosable: true,
    status: "error",
  };
};

export default warningToastOptions;
