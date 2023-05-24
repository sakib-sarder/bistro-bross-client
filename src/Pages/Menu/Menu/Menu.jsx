import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offereds = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title={"our menu"}></Cover>
      {/* Main Cover  */}
      <SectionTitle subHeading={"Don't Miss "} heading={"Todays offer"} />
      {/* Offerd Menu Items  */}
      <MenuCategory items={offereds}></MenuCategory>
      {/* Dessert Menu Items  */}
      <MenuCategory
        coverImg={dessertImg}
        items={desserts}
        title={"dessert"}
      ></MenuCategory>
      <MenuCategory
        coverImg={pizzaImg}
        items={pizzas}
        title={"pizza"}
      ></MenuCategory>
      <MenuCategory
        coverImg={saladImg}
        items={salads}
        title={"salad"}
      ></MenuCategory>
      <MenuCategory
        coverImg={soupImg}
        items={soups}
        title={"soup"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
