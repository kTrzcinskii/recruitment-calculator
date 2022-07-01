import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Heading, HStack, IconButton, VStack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import ChooseUniversity from "../components/ChooseUniversity";

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const [university, setUniversity] = useState<undefined | "PW" | "PG" | "PP">(
    undefined
  );
  return (
    <VStack
      w='full'
      pt={10}
      color='purple.800'
      minH='100vh'
      bgColor='purple.50'
    >
      <Heading>Kalkulator Rekrutacyjny</Heading>
      {step === 0 && (
        <ChooseUniversity setUniversity={setUniversity} setStep={setStep} />
      )}
      <HStack spacing={4}>
        <IconButton
          aria-label='Previous Step'
          icon={<ChevronLeftIcon boxSize={8} />}
          colorScheme='purple'
          disabled={step === 0}
          onClick={() => setStep((prev) => prev - 1)}
        />
        <Text color='purple.700' fontSize='xl' fontWeight='semibold'>
          Krok {step + 1}
        </Text>
        <IconButton
          aria-label='Next Step'
          icon={<ChevronRightIcon boxSize={8} />}
          colorScheme='purple'
          onClick={() => setStep((prev) => prev + 1)}
        />
      </HStack>
    </VStack>
  );
};

export default Home;
