import { Flex, HStack, Stack, Text } from "@chakra-ui/react";

interface SingleResultProps {
  name: string;
  faculty: string;
  isEnough: boolean;
  score: string;
}

const SingleResult: React.FC<SingleResultProps> = ({
  name,
  faculty,
  isEnough,
  score,
}) => {
  return (
    <Stack
      w='full'
      justifyContent='space-between'
      direction={{ base: "column", md: "column", lg: "row" }}
    >
      <HStack
        justifyContent='space-between'
        px={3}
        py={2}
        bgColor={isEnough ? "green.300" : "red.200"}
        rounded='lg'
        w={{ base: "full", md: "full", lg: "480px" }}
      >
        <Text maxW='50%'>{name}</Text>
        <Text maxW='50%' textAlign='right'>
          {faculty !== "-" ? faculty : ""}
        </Text>
      </HStack>
      <Flex
        w={{ base: "full", md: "full", lg: "auto" }}
        justifyContent='center'
        alignItems='center'
      >
        <Text fontWeight='semibold' textAlign='center' w='full'>
          {score}
        </Text>
      </Flex>
    </Stack>
  );
};

export default SingleResult;
