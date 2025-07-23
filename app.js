import React from "react"
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestuarentMenu from "./src/components/RestuarentMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <Header /> 
            <Outlet />
        </div>
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