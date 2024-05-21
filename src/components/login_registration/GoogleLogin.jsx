import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin();
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn hover:btn-primary hover:text-white bg-white w-full"
    >
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
