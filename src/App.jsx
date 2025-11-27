import React from "react";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Abount from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Body from "./components/Body/Body";
import RestaurantMenu from "./components/Body/RestaurantMenu";
import PageNotFound from "./components/pages/PageNotFound";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Abount />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const App = () => (
  <div className="container">
    <RouterProvider router={appRouter} />
  </div>
);

export default App;
