import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const saveUser = { name: result.user.displayName, email: result.user.email };
        fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
            });

      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FaGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
