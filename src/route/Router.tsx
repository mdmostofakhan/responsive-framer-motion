
import App from "@/App";
import Home from "@/pages/Home";
import About from "@/pages/About";
import { createBrowserRouter, Navigate } from "react-router-dom";
import AddMinLayOut from "@/components/layout/AddminLayOut";
import AddServices from "@/pages/admin/AddServices";
import ServicesList from "@/pages/admin/ServicesList";
import Dashboard from "@/pages/admin/Dashboard";


const router = createBrowserRouter([

    {
     path: "/",
        element: <App></App>,
        children: [
          {
            index: true,
            element: <Home/>
          },
         {
            path: "about",
            element: <About />
        }
      ]
    },
       {  
            path: "/admin",
           element: <AddMinLayOut /> ,
           children: [
            {
                 index: true,
                 element: <Navigate to = "/admin/dashboard" />
            }, 
            
            {   
                path: 'dashboard',
                element: <Dashboard />
            },
          {
            path: "add-services",
            element: <AddServices />,
          },
         {
            path: "services-list",
            element: <ServicesList />
        }
      ]
    },
]
)

export default router;
