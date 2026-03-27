import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AppsPage from "../pages/AppsPage";
import AppDetailsPage from "../pages/AppDetailsPage";
import Error404Page from "../pages/Error404Page";
import HomePage from "../pages/HomePage";
import InstallationPage from "../pages/InstallationPage";
import NotFoundAppPage from "../pages/NotFoundAppPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "apps", element: <AppsPage /> },
      { path: "installation", element: <InstallationPage /> },
      { path: "apps/:id", element: <AppDetailsPage /> },
      { path: "app-not-found", element: <NotFoundAppPage /> },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
]);
