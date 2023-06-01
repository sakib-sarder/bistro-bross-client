import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  console.log(img_hosting_token);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgURL = imgRes.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Menu Item Added',
                showConfirmButton: false,
                timer: 1500
              })
            }
          });
        }
      });
  };

  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"What's new"}
        heading={"add an item"}
      ></SectionTitle>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-12 py-4 my-4 mx-auto w-11/12 bg-gray-200"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            name="name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex justify-between gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
              name="category"
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Deshi</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              name="price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
            name="recipe"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Upload Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            name="image"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" value="Add Item" className="btn btn-sm" />
      </form>
    </div>
  );
};

export default AddItem;
