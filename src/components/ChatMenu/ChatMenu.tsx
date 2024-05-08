import { Flex } from "@chakra-ui/react";
import { ChatElement } from "../ChatElement/ChatElement";

export const ChatMenu = () => {
    return (
        <Flex overflowY='scroll' gap={3} flexDirection='column' p={5} position='fixed' left="0" top='80px' w='30%' borderRight="1px solid white" h='calc(100vh - 80px)'>
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
            <ChatElement />
        </Flex>
    );
}