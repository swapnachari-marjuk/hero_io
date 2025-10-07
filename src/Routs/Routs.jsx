import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path:'/allApps',
            Component: AllApps
        },
        {
            path:'/installedApps',
            Component: Installation
        }
    ]
  },
]);

export default router;