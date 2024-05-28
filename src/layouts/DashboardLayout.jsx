import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    // if pathname contains "editRecipe" then do 1 step back or goto home
    if (location.pathname.includes("editRecipe")) {
      // Option 1: Go back one step
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div>
            <button onClick={handleNavigate}>🔙</button>{" "}
            <span className="flex-1 px-2 mx-2 md:text-3xl font-bold">
              Dashboard
            </span>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to="/dashboard">Profile</Link>
              </li>
              <li>
                <NavLink to="/dashboard/addRecipe">Add Recipe</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageRecipes">Manage Recipes</NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}

          <li>
            <Link to="/dashboard">Profile</Link>
          </li>
          <li>
            <NavLink to="/dashboard/addRecipe">Add Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageRecipes">Manage Recipes</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
