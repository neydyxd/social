import { Box, Flex, Input, Textarea } from "@chakra-ui/react";

export const Chat = () => {
  return (
    <Flex
      position="fixed"
      top="80px"
      left="30%"
      w="calc(100% - 30%)"
      h="calc(100vh - 80px)"
      p={4}
    >
      <Flex
        flexDirection="column"
        border="1px solid #9C9C9C"
        borderRadius="24px"
        w="100%"
        h="100%"
        p={3}
      >
        <Box
          w="100%"
          h="full"
          border="1px solid white"
          borderRadius="24px 24px 0 0"
        ></Box>
        <Box
          w="100%"
          h="max-content"
          border="1px solid white"
          borderRadius="0 0 24px 24px "
          p={5}
        >
          <Textarea maxWidth="80%" minH='40px' maxH='300px' ></Textarea>
        </Box>
      </Flex>
    </Flex>
  );
};
