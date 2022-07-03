import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Heading,
  HStack,
  IconButton,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";
import AllCourses from "../components/AllCourses";
import ChooseUniversity from "../components/ChooseUniversity";
import warningToastOptions from "../utils/toast/chooseUniversityToast";

const Home: NextPage = () => {
  const [step, setStep] = useState(0);
  const [university, setUniversity] = useState<undefined | "PW" | "PG" | "PP">(
    undefined
  );
  const [choosenCourses, setChoosenCourses] = useState<string[]>([]);

  const toast = useToast();
  const chooseUniversityToast = warningToastOptions(
    "Proszę wybrać uczelnie przed przejściem do kolejnego kroku."
  );
  const chooseCoursesToast = warningToastOptions(
    "Proszę wybrać przynajmniej jeden kierunek przed przejściem do kolejnego kroku."
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
        <ChooseUniversity
          setUniversity={setUniversity}
          setStep={setStep}
          currentUniversity={university}
        />
      )}
      {step === 1 && university && (
        <AllCourses
          universityName={university}
          choosenCourses={choosenCourses}
          setChoosenCourses={setChoosenCourses}
        />
      )}
      <HStack spacing={4} py={5}>
        <IconButton
          aria-label='Previous Step'
          icon={<ChevronLeftIcon boxSize={8} />}
          colorScheme='purple'
          disabled={step === 0}
          onClick={() => {
            if (step === 1) {
              setChoosenCourses([]);
            }
            setStep((prev) => prev - 1);
          }}
        />
        <Text color='purple.700' fontSize='xl' fontWeight='semibold'>
          Krok {step + 1}
        </Text>
        <IconButton
          aria-label='Next Step'
          icon={<ChevronRightIcon boxSize={8} />}
          colorScheme='purple'
          onClick={() => {
            if (step === 0 && !university) {
              toast(chooseUniversityToast);
              return;
            }
            if (step === 1 && choosenCourses.length === 0) {
              toast(chooseCoursesToast);
              return;
            }
            setStep((prev) => prev + 1);
          }}
        />
      </HStack>
    </VStack>
  );
};

export default Home;
