import Home from "src/pages/home";
import Login from "src/pages/login";
import { pageType } from "src/utils/types";

export const pages: pageType[] = [
    {
        title: 'login',
        path: '/login',
        element: <Login />,
        authGuard: false
    },
    {
        title: 'home',
        path: '',
        element: <Home />,
        authGuard: true
    }
]
