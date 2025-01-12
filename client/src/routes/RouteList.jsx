import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Victims from "../pages/Victims";
import VictimsEdit from "../pages/VictimsEdit";
import Locations from "../pages/Locations";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LocationsAdd from "../pages/LocationsAdd";
import LocationsEdit from "../pages/LocationsEdit";
import VictimsAdd from "../pages/VictimsAdd";

const RouteList = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // Dashboard url(/)
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "locations",
                children: [
                    // locations url(/locations)
                    {
                        index: true,
                        element: <Locations />,
                    },
                    // Add url(/locations/add)
                    {
                        path: "add",
                        element: <LocationsAdd />,
                    },
                    // Edit url(/locations/:id)
                    {
                        path: ":id",
                        element: <LocationsEdit />,
                    },
                ],
            },
            {
                path: "victims",
                children: [
                    // Victims url(/victims)
                    {
                        index: true,
                        element: <Victims />,
                    },
                    // Add url(/victims/add)
                    {
                        path: "add",
                        element: <VictimsAdd />,
                    },
                    // Edit url(/victims/:id)
                    {
                        path: ":id",
                        element: <VictimsEdit />,
                    },
                ],
            },
        ],
    },
]);

export default RouteList;
