import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <SectionTitle subHeading={"Reservation"} heading={"Book a table"} />
      <div className="w-full px-8">
        <div className="uppercase flex justify-between items-center my-8 font-bold">
          <h1>Total Items: {cart.length}</h1>
          <p>
            Total Price : ${cart.reduce((sum, item) => sum + item.price, 0)}
          </p>
          <button className="btn btn-warning btn-sm">Pay Now</button>
        </div>
        <div className="overflow-x-auto w-full ">
          <table className="table  text-center w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((row, index) => (
                <tr key={row._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={row.image}
                      alt="Food"
                      className="h-12 w-12 rounded-lg mx-auto"
                    />
                  </td>
                  <td>{row.name}</td>
                  <td className="text-end">${row.price}</td>
                  <td>
                    <button onClick={() => handleDelete(row)}>
                      <FaTrashAlt className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCart;
