import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const CreatedBy: React.FC = () => {
  return (
    <Flex
      minH='100px'
      w='full'
      bgColor='purple.800'
      justifyContent='center'
      alignItems='center'
      pos='absolute'
      bottom={0}
    >
      <Text fontSize='2xl' color='white'>
        Created by{" "}
        <NextLink href='https://github.com/kTrzcinskii' passHref={true}>
          <Link fontWeight='semibold' color='purple.100' target='_blank'>
            Kacper Trzciński
          </Link>
        </NextLink>
      </Text>
    </Flex>
  );
};

export default CreatedBy;
