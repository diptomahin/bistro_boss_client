import FoodCard from "../../../Components/FoodCard/FoodCard";

const FoodCategory = ({items}) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
        {
             items.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
         }
        </div>
    );
};

export default FoodCategory;