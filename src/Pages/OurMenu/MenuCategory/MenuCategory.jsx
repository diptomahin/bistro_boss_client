import Cover from "../../../Components/Cover/Cover";
import MenuCard from "../../../Components/MenuCard/MenuCard";

const MenuCategory = ({ items , img , title, description }) => {
    return (
        <div className="my-10  ">

           { title && <Cover img={img} title={title} description={description}></Cover>}
            <div className="grid md:grid-cols-2 w-10/12 gap-5 my-14 mx-auto">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;