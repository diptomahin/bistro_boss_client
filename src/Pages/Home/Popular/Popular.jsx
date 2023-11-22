
import MenuCard from "../../../Components/MenuCard/MenuCard";
import UseMenu from './../../../Hooks/UseMenu/UseMenu';

const Popular = () => {
    const [menu] = UseMenu();

    const popular = menu.filter(item => item.category === 'popular' )

    return (
        <div>
           
            <div className="grid md:grid-cols-2 w-10/12 gap-5 my-14 mx-auto">
                {
                    popular.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Popular;