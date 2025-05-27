 import Home from "../pages/client/Home"
 import Blog from "../pages/client/Blog"
import Contact from "../pages/client/Contact"
import Electronics from "../pages/client/Electronics"
import Layout from "../Layout/ClientLayout";
import Pages from "../pages/client/Pages";
import Basket from "../pages/client/Basket";
import Admin from "../companents/Admin";
 
const Route = [
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "blog",
                element: <Blog/>,
            },
            {
                path: "contact",
                element: <Contact/>,
            },
            {
                path: "electronics",
                element: <Electronics/>,
            },
            {
                path: "basket",
                element: <Basket/>,
            },
            {
                path: "pages",
                element: <Pages/>,
            },
            {
                path: "admin",
                element: <Admin/>,
            },
            
        ],
    },
];

export default Route;