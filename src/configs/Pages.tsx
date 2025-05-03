import Home from "src/pages/home";
import Login from "src/pages/login";
import { PageType } from "src/utils/types";

export const pages: PageType[] = [
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
