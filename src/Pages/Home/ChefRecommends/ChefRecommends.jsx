import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefRecommendsCards from "./ChefRecommendsCards";

const ChefRecommends = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const chefRecommends = items.slice(0, 4);
  console.log(chefRecommends);
  return (
    <section className="my-20">
      <SectionTitle heading={"chef recommends"} subHeading={"Should Try"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {chefRecommends.map((items) => (
          <ChefRecommendsCards
            key={items._id}
            items={items}
          ></ChefRecommendsCards>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
