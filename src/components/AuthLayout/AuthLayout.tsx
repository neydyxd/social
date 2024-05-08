import { Box, Flex } from "@chakra-ui/react";

interface LoginLayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

export const AuthLayout = (props: LoginLayoutProps) => {
  return (
    <Flex backgroundColor='#474A51' height="100vh" alignItems="center" justifyContent="center">
      <Box
        p="32px 24px"
        w="360px"
        m="0 auto"
        border="1px solid #e3e7ef"
        rounded="8px"
        bg="none"
      >
        {props.children}
      </Box>
    </Flex>
  );
};
