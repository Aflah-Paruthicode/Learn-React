import React from "react"
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement: <Error />
    },
    {
        path:'/about',
        element:<AboutUs />
    },
    {
        path:'/contact',
        element:<ContactUs />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)