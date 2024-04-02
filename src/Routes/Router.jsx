import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Login from "../components/Basic/Login";
import Register from "../components/Basic/Register";
import FAQ from "../components/Basic/FAQ/FAQ";
import Home from "../components/Basic/Home/Home";
import Features from "../components/Basic/Features/Features";
import Partners from "../components/Basic/Partners";
import Tournaments from "../components/Tournaments/Tournaments";
import PrivateRoute from "./PrivateRoute";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
            },
        {
            path: '/faq',
            element: <FAQ/>
        },
        {
            path: '/partners',
            element: <Partners/>
        },
        {
            path: '/features',
            element: <Features/>
        },
        {
            path: '/tournaments',
            element: <PrivateRoute><Tournaments/></PrivateRoute>
        }
        ]
    }
]);

export default router;