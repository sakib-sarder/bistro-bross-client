import {  useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import authImg from "../../assets/others/authentication2.png";
import "./Login.css";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signIn } = useAuth();
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    // const captcha = form.captcha.value;
    const password = form.password.value;
    // console.log(email, password, captcha);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successfull",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (event) => {
    const user_catcha_value = event.target.value;
    if (validateCaptcha(user_catcha_value)) {
      setDisabled(!disabled);
    } else {
      setDisabled(!disabled);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="login-bg hero min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2">
            <img src={authImg} alt="" />
          </div>
          <div className=" w-full md:w-1/2 ">
            <h1 className="text-center text-4xl font-bold">Login</h1>
            <form onSubmit={handleLogin} className="mt-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                />
              </div>
              {/* todo: make btn disable for chaptcha */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-[#D1A054] border-0"
                  disabled={disabled}
                />
              </div>
            </form>
            <p className="text-xs text-center my-3">
              New Here{" "}
              <Link to="/register" className="underline hover:text-blue-500">
                Create an Account
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
