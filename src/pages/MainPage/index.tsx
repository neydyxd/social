import { Box } from "@chakra-ui/react"
import { Header } from "../../components/Header/Header"
import { ChatMenu } from "../../components/ChatMenu/ChatMenu"
import { Chat } from "../../components/Chat/Chat"

export const MainPage = () => {
    return(
        <Box backgroundColor='#474A51' height="100vh">
            <Header />
            <ChatMenu />
            <Chat />
        </Box>
    )
}