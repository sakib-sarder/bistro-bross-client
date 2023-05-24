import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mb-6 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
      <Link to={`/order/${title}`}>
        <button className="btn text-[#D5B363] btn-outline border-0 border-b-4 hover:bg-[#151515] hover:text-[#D5B363]">
          Order Now
        </button>
      </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
