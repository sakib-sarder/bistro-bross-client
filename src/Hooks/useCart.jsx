import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  // const token = localStorage.getItem("access-token");
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!localStorage.getItem("access-token"),
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },

    //Interceptor

    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("response from axios", response);
      return response.data;
    },
  });
  return [cart, refetch];
};

export default useCart;


//https://internshala.com/internship/detail/web-development-work-from-home-job-internship-at-skiaverse-private-limited1685525092