import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";
import Login from "./src/components/Login";
import UserContext from "./src/utils/UserContext";
import store from "./src/utils/store";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";
//import Instamart from "./src/components/Instamart";
//const RestaurantCard = (props) => {
const Instamart = lazy(() => import("./src/components/Instamart"));
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "devuser",
    email: "devuser@gmail.com",
  });

  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />

        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: (
          <Body
          // user={{
          //   user: "Ajeet Verma",
          //   email: "ajeet57@gmail.com",
          // }}
          />
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
