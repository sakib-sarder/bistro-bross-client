const ChefRecommendsCards = ({ items }) => {
  const { name, image, recipe } = items;
  return (
    <div className="bg-[#F3F3F3] shadow-xl flex flex-col justify-between">
      <img src={image} alt="Shoes" className="" />
      <div className="space-y-3">
        <h2 className="text-center text-lg font-semibold">{name}</h2>
        <p className="text-center text-sm">{recipe}</p>
        <div className="text-center pb-2">
          <button className=" px-3 py-2 bg-[#E8E8E8] rounded-lg border-0 border-b-4 border-[#D5B363] hover:bg-[#1F2937] text-[#D5B363] text-lg font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendsCards;
