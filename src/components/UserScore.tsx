import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { UserScoreInput } from "../schema/user.schema";

interface UserScoreProps {
  score: UserScoreInput;
  setScore: Dispatch<SetStateAction<UserScoreInput>>;
}

const UserScore: React.FC<UserScoreProps> = ({ score, setScore }) => {
  return (
    <form>
      <FormControl>
        <VStack spacing={5}>
          <Box w='320px'>
            <FormLabel htmlFor='polskiPodst'>
              Język Polski Poziom Podstawowy
            </FormLabel>
            <NumberInput
              max={100}
              min={0}
              defaultValue={score.polskiPodst}
              focusBorderColor='purple.800'
              onChange={(value) =>
                setScore((prev) => ({ ...prev, polskiPodst: Number(value) }))
              }
            >
              <NumberInputField id='polskiPodst' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w='320px'>
            <FormLabel htmlFor='matematykaPodst'>
              Matematyka Poziom Podstawowy
            </FormLabel>
            <NumberInput
              max={100}
              min={0}
              defaultValue={score.matematykaPodst}
              focusBorderColor='purple.800'
              onChange={(value) =>
                setScore((prev) => ({
                  ...prev,
                  matematykaPodst: Number(value),
                }))
              }
            >
              <NumberInputField id='matematykaPodst' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w='320px'>
            <FormLabel htmlFor='angielskiPodst'>
              Język Angielski Poziom Podstawowy
            </FormLabel>
            <NumberInput
              max={100}
              min={0}
              defaultValue={score.angielskiPodst}
              focusBorderColor='purple.800'
              onChange={(value) =>
                setScore((prev) => ({ ...prev, angielskiPodst: Number(value) }))
              }
            >
              <NumberInputField id='angielskiPodst' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w='320px'>
            <FormLabel htmlFor='matematykaRozsz'>
              Matematyka Poziom Rozszerzony
            </FormLabel>
            <NumberInput
              max={100}
              min={0}
              defaultValue={score.matematykaRozsz}
              focusBorderColor='purple.800'
              onChange={(value) =>
                setScore((prev) => ({
                  ...prev,
                  matematykaRozsz: Number(value),
                }))
              }
            >
              <NumberInputField id='matematykaRozsz' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w='320px'>
            <FormLabel htmlFor='fizykaRozsz'>
              Fizyka Poziom Rozszerzony
            </FormLabel>
            <NumberInput
              max={100}
              min={0}
              defaultValue={score.fizykaRozsz}
              focusBorderColor='purple.800'
              onChange={(value) =>
                setScore((prev) => ({ ...prev, fizykaRozsz: Number(value) }))
              }
            >
              <NumberInputField id='fizykaRozsz' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Box w='320px'>
            <FormLabel htmlFor='angielskiRozsz'>
              Język Angielski Poziom Rozszerzony
            </FormLabel>
            <NumberInput
              max={100}
              min={0}
              defaultValue={score.angielskiRozsz}
              focusBorderColor='purple.800'
              onChange={(value) =>
                setScore((prev) => ({ ...prev, angielskiRozsz: Number(value) }))
              }
            >
              <NumberInputField id='angielskiRozsz' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <Checkbox
            checked={score.czyB2}
            defaultChecked={score.czyB2}
            onChange={(e) =>
              setScore((score) => ({ ...score, czyB2: e.target.checked }))
            }
            colorScheme='purple'
            width='320px'
          >
            Posiadam certyfikat o znajomości języka angielskiego na poziomie co
            najmniej B2.
          </Checkbox>
        </VStack>
      </FormControl>
    </form>
  );
};

export default UserScore;
