import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import RestourantMenu from "./component/RestourantMenu";
import Profile from "./component/Profile";
import Shimmer from "./component/Shimmer";
// import Instamart from "./component/Instamart";
import Login from "./component/Login";
import { Provider } from "react-redux";
import store from "./utils/store";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
} from "react-router-dom";
import UserContext from "./utils/userContext";

const Instamart = lazy(() => import("./component/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Aadesh Nichite",
    email: "aadesh@gmail.com",
  });

  useEffect(() => {
    //dummy API and authenticate user
  });

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const Combined = () => {
  return <Outlet />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/layout",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "body",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:id",
        element: <RestourantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
