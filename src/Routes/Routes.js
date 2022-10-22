import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News/News";
import Profile from "../Pages/Others/Profile/Profile";
import TermsANdConditions from "../Pages/Others/TermsANdConditions";
import Register from "../Pages/Register/Register";
import Privateroute from "./Privateroute/Privateroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000/news'),
        element: <Home></Home>,
      },

      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
        element: <Privateroute>
          <News></News>
        </Privateroute>,
      },

      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Category></Category>,
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <TermsANdConditions></TermsANdConditions>
      },
      {
        path: '/profile',
        element: <Privateroute>
          <Profile></Profile>
        </Privateroute>
      }
    ],
  },
]);
