const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="bg-[#F9F9F9] relative shadow-xl h-full flex flex-col">
  <figure>
    <img src={image} alt="Shoes" className="w-full"/>
  </figure>
  <p className="bg-slate-900 absolute right-4 top-4 px-4 rounded-md text-white">
    ${price}
  </p>
  <div className="card-body text-center py-8 flex flex-col items-center flex-grow">
    <h2 className="card-title">{name}</h2>
    <p className="text-md">{recipe.slice(0,50)}...</p>
    <button className="bistro-btn">Add to cart</button>
  </div>
</div>
  );
};

export default FoodCard;
