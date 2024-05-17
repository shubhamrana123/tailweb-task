import { FC } from "react";
import LoginScreen from "../../screens/auth/LoginScreen";
import Home from "../../screens/dashboard/Home";

interface Route {
    key: string;
    path: string;
    title: string;
    component: FC<Record<string, string>>;

}
export const authRoutes: Array<Route> = [
    {
        key: 'landingScreen-route',
        path: '/',
        title: '',
        component: LoginScreen
    },
    {
        key: 'login-route',
        path: '/login',
        title: 'loginRoute',
        component: LoginScreen
    },

]
export const afterLoginRoutes: Array<Route> = [
    {
        key: 'landingScreen-route',
        path: '/',
        title: 'Home-screen',
        component: Home
    },
    {
        key: 'Home-page',
        path: '/home',
        title: 'Home-screen',
        component: Home
    }
]