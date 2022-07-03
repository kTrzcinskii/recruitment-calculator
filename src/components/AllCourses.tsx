import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { trpc } from "../utils/trpc";
import SingleCourse from "./SingleCourse";

interface AllCoursesProps {
  universityName: "PW" | "PG" | "PP";
  choosenCourses: string[];
  setChoosenCourses: Dispatch<SetStateAction<string[]>>;
}

const AllCourses: React.FC<AllCoursesProps> = ({
  universityName,
  choosenCourses,
  setChoosenCourses,
}) => {
  const { data, isLoading, isError, error } = trpc.useQuery([
    "get-courses",
    { universityName },
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
        Zaznacz interesujące cię kursy:
      </Text>
      {data.map((course) => (
        <SingleCourse
          key={course.id}
          id={course.id}
          name={course.name}
          faculty={course.faculty}
          isChosen={choosenCourses.includes(course.id)}
          setChoosenCourses={setChoosenCourses}
        />
      ))}
    </VStack>
  );
};

export default AllCourses;
