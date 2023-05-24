const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="bg-base-100 relative shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full"/>
      </figure>
      <p className="bg-slate-900 absolute right-4 top-4 px-4 rounded-md text-white ">
        ${price}
      </p>
      <div className="card-body text-center py-8 flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
