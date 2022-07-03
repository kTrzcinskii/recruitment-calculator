import { HStack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface SingleCourseProps {
  id: string;
  name: string;
  faculty: string;
  isChosen: boolean;
  setChoosenCourses: Dispatch<SetStateAction<string[]>>;
}

const SingleCourse: React.FC<SingleCourseProps> = ({
  id,
  setChoosenCourses,
  name,
  faculty,
  isChosen,
}) => {
  return (
    <HStack
      cursor='pointer'
      onClick={() => {
        if (!isChosen) {
          setChoosenCourses((prev) => [...prev, id]);
          return;
        }
        setChoosenCourses((prev) => prev.filter((courseId) => courseId !== id));
      }}
      justifyContent='space-between'
      w='full'
      px={3}
      py={2}
      bgColor={isChosen ? "purple.300" : "purple.100"}
      ring={isChosen ? 3 : 0}
      ringColor='purple.800'
      rounded='lg'
      transition='ease-in-out'
      transitionDuration='200ms'
    >
      <Text maxW='50%'>{name}</Text>
      <Text maxW='50%' textAlign='right'>
        {faculty !== "-" ? faculty : ""}
      </Text>
    </HStack>
  );
};

export default SingleCourse;
