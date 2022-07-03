import { UseToastOptions } from "@chakra-ui/react";

const chooseUniversityToast = (): UseToastOptions => {
  return {
    position: "top",
    title: "Uwaga!",
    description: "Proszę wybrać uczelnie przed przejściem do kolejnego kroku.",
    isClosable: true,
    status: "error",
  };
};

export default chooseUniversityToast;
