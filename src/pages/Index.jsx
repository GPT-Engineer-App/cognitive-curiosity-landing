import { Box, Container, Heading, Text, Image, VStack, Button } from "@chakra-ui/react";
import { FaBrain, FaBookOpen, FaLightbulb } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={10}>
        <Box textAlign="center">
          <Heading mb={4}>Explore Cognitive Learning</Heading>
          <Text fontSize="xl">Dive deep into the world of curiosity and knowledge acquisition.</Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFpbiUyMHRoaW5raW5nfGVufDB8fHx8MTcxNDAxOTYxNXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xl">What is Cognitive Learning?</Heading>
          <Text mt={4}>Cognitive learning is a style of learning that encourages students to use their brains more effectively. This method involves understanding the reason behind concepts, enhancing comprehension, and making connections between different ideas.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading fontSize="xl">Why Curiosity Matters?</Heading>
          <Text mt={4}>Curiosity is the engine of intellectual achievement — it's what drives us to keep learning, keep questioning, and keep pushing forward.</Text>
        </Box>

        <VStack spacing={5}>
          <Button leftIcon={<FaBrain />} colorScheme="teal" variant="solid">
            Learn More About the Brain
          </Button>
          <Button leftIcon={<FaBookOpen />} colorScheme="orange" variant="solid">
            Explore Courses
          </Button>
          <Button leftIcon={<FaLightbulb />} colorScheme="yellow" variant="solid">
            Get Inspired
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
