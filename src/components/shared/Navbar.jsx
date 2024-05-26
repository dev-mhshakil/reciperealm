import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { logOut, user } = useAuth();

  const handleLogout = async () => {
    await logOut();
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 px-16 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/recipes"}>Recipes</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn bg-red-500 text-white sm:btn-md sm:mt-4"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold ms-5">
          Recipe<span className="text-red-500">Realm</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/recipes"}>Recipes</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-2 me-5">
        <div>
          {user && (
            <button
              onClick={handleLogout}
              className="btn bg-red-500 text-white hidden lg:block lg:hover:text-black"
            >
              Logout
            </button>
          )}
        </div>
        <div>
          {user && (
            <Link to={"/dashboard"} className="btn">
              Dashboard
            </Link>
          )}
        </div>
        <div className="avatar ">
          <div className="w-12 rounded-full border-2 border-black">
            <img src={user?.photoURL || "/placeholder.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
