import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { AuthLayout } from "../../components/AuthLayout/AuthLayout";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <form>
        <Flex flexDirection="column" gap={7}>
          <Heading as="h1" fontSize={24} textAlign="center" color="white">
            Авторизация
          </Heading>
          <Input
            focusBorderColor="#DCDCDC"
            borderColor="white"
            color="white"
            placeholder="Номер телефона"
          ></Input>
          <Input
            focusBorderColor="#DCDCDC"
            borderColor="white"
            color="white"
            placeholder="Пароль"
          ></Input>
          <Button w="100px" onClick={() => navigate("/")}>
            Войти
          </Button>
        </Flex>
      </form>
    </AuthLayout>
  );
};
