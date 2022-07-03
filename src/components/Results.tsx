import { Spinner, VStack, Heading, Text } from "@chakra-ui/react";
import { UserScoreInput } from "../schema/user.schema";
import { trpc } from "../utils/trpc";
import SingleResult from "./SingleResult";

interface ResultsProps {
  userScore: UserScoreInput;
  university: "PP" | "PG" | "PW";
  choosenCourses: string[];
}

const Results: React.FC<ResultsProps> = ({
  userScore,
  university,
  choosenCourses,
}) => {
  const { data, isLoading, isError, error } = trpc.useQuery([
    "get-results",
    {
      courses: choosenCourses,
      universityName: university,
      userScoreSchema: userScore,
    },
  ]);

  if (isLoading) {
    return <Spinner colorScheme='purple' boxSize={100} py={10} />;
  }

  if (!data || isError) {
    console.log(error?.data);
    return (
      <VStack py={20}>
        <Heading color='red.800'>Server Error</Heading>
        <Text fontSize='2xl' color='red.700'>
          Try again later
        </Text>
      </VStack>
    );
  }

  return (
    <VStack
      width={{ base: "350px", md: "470px", lg: "600px", xl: "750px" }}
      py={6}
    >
      <Text fontSize='2xl' color='purple.700'>
        Twój wynik:
      </Text>
      {data.map((course) => (
        <SingleResult key={course.id} {...course} />
      ))}
    </VStack>
  );
};

export default Results;
