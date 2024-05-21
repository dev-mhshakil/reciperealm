import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/login_registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import GithubLogin from "../components/login_registration/GithubLogin";

const Login = () => {
  const { signIn, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    await signIn(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="w-full min-h-screen max-w-md p-8 mb-5 space-y-3 rounded-xl mx-auto bg-slate-100 ">
      <h1 className="text-2xl font-bold text-center mt-20">Login</h1>
      <form
        onSubmit={handleSignIn}
        noValidate=""
        action=""
        className="space-y-6"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
          />
          <div className="flex justify-end text-xs dark:text-gray-600">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className=" w-full p-3 text-center rounded-sm btn btn-error text-white">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        <p className="px-3 text-sm dark:text-gray-600">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
      </div>
      <div className="flex flex-col gap-3">
        <GoogleLogin />
        <GithubLogin />
      </div>
      <p className="text-xs text-center sm:px-6 ">
        Don&apos;t have an account ?{" "}
        <Link to="/register" className="underline text-red-500">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
