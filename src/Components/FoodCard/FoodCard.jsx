
const FoodCard = ({item}) => {
    const { image , name,  recipe} = item;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;