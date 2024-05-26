import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Recipes from "../pages/Recipes";
import Blog from "../pages/Blog";
import ManageAllRecipe from "../pages/dashboard/ManageAllRecipe";
import AddRecipe from "../pages/dashboard/AddRecipe";
import EditRecipe from "../pages/dashboard/EditRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/recipes"),
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-recipes",
        element: <ManageAllRecipe />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "edit-recipe/:id",
        element: <EditRecipe />,
      },
    ],
  },
]);

export default router;
