import { Button, Stack, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface ChooseUniversityProps {
  setUniversity: Dispatch<SetStateAction<"PW" | "PG" | "PP" | undefined>>;
  setStep: Dispatch<SetStateAction<number>>;
}

const ChooseUniversity: React.FC<ChooseUniversityProps> = ({
  setUniversity,
  setStep,
}) => {
  return (
    <VStack
      width={{ base: "350px", md: "450px", lg: "500px", xl: "550px" }}
      py={6}
    >
      <Text fontSize='2xl' color='purple.700'>
        Wybierz uczelnie:{" "}
      </Text>
      <Stack direction={{ base: "column", md: "column", lg: "row" }}>
        <Button
          colorScheme='purple'
          onClick={() => {
            setUniversity("PW");
            setStep(1);
          }}
        >
          Politechnika Warszawska
        </Button>
        <Button
          colorScheme='purple'
          onClick={() => {
            setUniversity("PG");
            setStep(1);
          }}
        >
          Politechnika Gdańska
        </Button>
        <Button
          colorScheme='purple'
          onClick={() => {
            setUniversity("PP");
            setStep(1);
          }}
        >
          Politechnika Poznańska
        </Button>
      </Stack>
    </VStack>
  );
};

export default ChooseUniversity;
