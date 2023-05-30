import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import regImg from "../../assets/others/authentication2.png";
import Swal from "sweetalert2";
import "./Register.css";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      console.log(result.user);
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className="hero min-h-screen register-bg">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <img src={regImg} />
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold text-center mb-2">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-error text-sm">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  name="photoUrl"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-error text-sm">
                    PhotoUrl is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-error text-sm">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 12,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./,
                  })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type == "minLength" && (
                  <span className="text-error text-sm">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type == "maxLength" && (
                  <span className="text-error text-sm">
                    Password must be less than 12 chracters
                  </span>
                )}
                {errors.password?.type == "pattern" && (
                  <span className="text-error text-sm">
                    Password must have one uppercase, one lowercase & one
                    special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn bg-[#D1A054] border-0"
                />
              </div>
            </form>
            <p className="text-xs text-center my-3">
              Already have an account &nbsp;
              <Link to="/login" className="underline hover:text-blue-500">
                Login
              </Link>
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
