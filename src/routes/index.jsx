 import Home from "../pages/client/Home"
 import Blog from "../pages/client/Blog"
import Contact from "../pages/client/Contact"
import Electronics from "../pages/client/Electronics"
import CLientLayout from "../Layout/ClientLayout";

const Route = [
    {
        path: "/",
        element: <CLientLayout/>,
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
        ],
    },
];

export default Route;