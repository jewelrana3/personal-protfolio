import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path:'/',
            element:<Home></Home>
           },
           {
            path:'about',
            element:<About></About>
           },
           {
            path:'education',
            element:<Education></Education>
           },
           {
            path:'skills',
            element:<Skills></Skills>
           },
           {
            path:'contact',
            element:<Contact></Contact>
           }
        ]
    }
])


export default router;