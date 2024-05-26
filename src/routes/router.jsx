import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import AddProducts from "../pages/dashboard/AddProducts";
import EditRecipe from "../pages/dashboard/EditRecipe";
import ManageRecipes from "../pages/dashboard/ManageRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      /* {
        path: "*",
        element: <div>Not Found 404!</div>,
      }, */
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "/dashboard/addRecipe",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/manageRecipes",
        element: <ManageRecipes />,
      },
      {
        path: "/dashboard/editRecipe/:id",
        element: <EditRecipe />,
      },
    ],
  },
]);
