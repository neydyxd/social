import { Avatar, Box, Flex, Text, WrapItem } from "@chakra-ui/react";

export const ChatElement = () => {
  return (
    <Flex
      cursor="pointer"
      p={7}
      h="80px"
      alignItems="center"
      w="100%"
      border="1px solid #9C9C9C"
      borderRadius="24px"
      _hover={{
        bg: "#828282",
      }}
    >
      <WrapItem>
        <Avatar
          size="md"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        ></Avatar>
      </WrapItem>
      <Box marginLeft={6}>
        <Text color="white" fontWeight={700}>
          {" "}
          Stepan Maksimov
        </Text>
        <Text color="#9C9C9C" fontWeight={400}>
          Хорошо
        </Text>
      </Box>
    </Flex>
  );
};
