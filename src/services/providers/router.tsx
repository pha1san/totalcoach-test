import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { PATH_PAGE } from "@/config/path";
import Navbar from "@/layouts/Navbar";
import Dashboard from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        index: true,
      },
      {
        path: PATH_PAGE.favorites,
        element: <div>Favorites</div>,
      },
      {
        path: PATH_PAGE.lessons,
        element: <div>Lessons</div>,
      },
      {
        path: PATH_PAGE.practice,
        element: <div>Practice</div>,
      },
      {
        path: PATH_PAGE.coachExercises,
        element: <div>Coach&apos;s Exercises</div>,
      },
      {
        path: PATH_PAGE.event,
        element: <div>Events</div>,
      },
      {
        path: PATH_PAGE.calendar,
        element: <div>Calendar</div>,
      },
      {
        path: PATH_PAGE.support,
        element: <div>Support</div>,
      },
      {
        path: PATH_PAGE.account,
        element: <div>Account</div>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
