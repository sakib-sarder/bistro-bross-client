import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [ , refetch] = useCart();

  const handleAddToCart = (menuItem) => {
    console.log(menuItem);
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch(`http://localhost:5000/carts`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch(); 
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food added on the cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login to add cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Naow!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="bg-[#F9F9F9] relative shadow-xl h-full flex flex-col">
      <figure>
        <img src={image} alt="Shoes" className="w-full" />
      </figure>
      <p className="bg-slate-900 absolute right-4 top-4 px-4 rounded-md text-white">
        ${price}
      </p>
      <div className="card-body text-center py-8 flex flex-col items-center flex-grow">
        <h2 className="card-title">{name}</h2>
        <p className="text-md">{recipe.slice(0, 50)}...</p>
        <button onClick={() => handleAddToCart(item)} className="bistro-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
