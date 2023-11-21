
const MenuCard = ({item}) => {
    const {name, image, recipe, price,} = item;
    return (
        <div className="flex space-x-2 ">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[118px] h-[100px] mr-5" src={image} alt="" />
            <div>
                <h3 className="text-2xl">{name}</h3>
                <p className="text-lg">{recipe}</p>
            </div>
            <p className="text-2xl text-[#BB8506]">{price}</p>
        </div>
    );
};

export default MenuCard;