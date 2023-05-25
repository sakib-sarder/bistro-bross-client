const ChefRecommendsCards = ({ items }) => {
  const { name, image, recipe } = items;
  return (
    <div className="bg-[#F3F3F3] shadow-xl flex flex-col justify-between">
      <img src={image} alt="Shoes" className="" />
      <div className="space-y-3">
        <h2 className="text-center text-lg font-semibold">{name}</h2>
        <p className="text-center text-sm">{recipe}</p>
        <div className="text-center pb-2">
          <button className="bistro-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendsCards;
