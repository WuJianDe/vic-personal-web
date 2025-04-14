import { RouteObject } from "react-router-dom";
import LayoutPage from "@/layouts/LayoutPage"
import NotFoundPage from "@/layouts/NotFoundPage"
import HomePage from "@/pages/HomePage"
import AboutPage from "@/pages/AboutPage"
import ContactPage from "@/pages/ContactPage"
import ProjectsPage from "@/pages/ProjectsPage"
const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ]
  }
];

export default routes;
