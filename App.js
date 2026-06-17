import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";
import UserContext from "./src/utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart.js";
//import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");

  // Authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Pooja Gidh",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="font-sans">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
      },
      {
        path: "restaurants/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
