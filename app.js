import {lazy, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import RestuarentMenu from "./src/components/RestuarentMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import userContext from './src/utils/userContext';

const AboutUs = lazy(() => import("./src/components/AboutUs"))
const ContactUs = lazy(() => import("./src/components/ContactUs"))



const AppLayout = () => {

    const [userName, setUserName]  = useState("")

    useEffect(() => {
        const data = {
            user : 'aflah'
        };
        setUserName(data.user)
    },[]);

    return (
        <userContext.Provider value={{ user : userName, setUserName }}>
        <div>
            <Header /> 
            <Outlet />
        </div>
        </userContext.Provider>
    )
}  

const appRouter = createBrowserRouter([
    {
        path:'/',
        element :<AppLayout />, 
        errorElement : <Error />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element : <AboutUs />
            },
            {
                path : '/contact',
                element : <ContactUs />
            },
            {
                path : '/restuarent/:resId',
                element : <RestuarentMenu />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)