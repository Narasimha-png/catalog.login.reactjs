import React from "react" ;
import ReactDOM from "react-dom/client" ;
import Header from "./Header";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom" ;
import Projects from "./Projects";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
const App = ()=>(
    <>
    <Header />
    <Outlet />
    </>
)
const route = createBrowserRouter([
    {
        path:"/", 
        element:<App />,
        errorElement: <h1>Error Page Here</h1>,
        children:[
            {
                path:"/" , 
                element:<Home />
            },
            {
                path:"/login", 
                element:<Login />
            },
            {
                path:"/signup",
                element:<SignUp />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<RouterProvider router={route} />)
