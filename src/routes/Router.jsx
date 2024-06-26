import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../components/Register";
import HeroSection from "../components/HeroSection";
import Service from "../components/Service";
import Login from "../components/Login";
import CheekOut from "../components/CheekOut";
import PrivateRouter from "./PrivateRouter";
import Booking from "../components/Booking";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <HeroSection></HeroSection>
            },
            {
                path: 'flower',
                element: <Service></Service>
            },
            
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path: 'cheekout/:id',
                element: <PrivateRouter><CheekOut></CheekOut></PrivateRouter>,
                loader : ({params})=>fetch(`http://localhost:5000/flowers/${params.id}`)
                
            },
            {
                path:'booking',
                element:<Booking></Booking>
            }

        ]
    },
]);