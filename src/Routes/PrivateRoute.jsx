import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useContext(AuthContext);
  // const location = useLocation();
  // if (loading) {
  //   return (
  //     <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
  //       <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
  //     </div>
  //   );
  // }
  // if (user) {
  //   return children;
  // }
  // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user, loading);

  console.log(location);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
