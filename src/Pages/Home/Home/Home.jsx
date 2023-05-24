import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import ChefService from "../ChefService/ChefService";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="px-4 md:px-0">
      <Helmet><title>Bistro Boss | Home</title></Helmet>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
