import { LoginPage } from "./pages/LoginPage/index"
import { MainPage } from "./pages/MainPage";

export type RouteType = {
    path: string;
    Component: () => JSX.Element;
};

export const routes: RouteType[] = [
    {
        path: "login",
        Component: LoginPage,
    },
    {
        path: "/chat",
        Component: MainPage,
    },
]    