import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../../../Components/MenuCard/MenuCard";

const Popular = () => {
    const [menu , setMenu] = useState([])

    useEffect(()=>{
        fetch(`menu.json`)
        .then(res=> res.json())
        .then(data=>{
        const popularItems = data.filter(item => item.category === 'popular' )
        setMenu(popularItems);
        })
    },[])
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid md:grid-cols-2 w-10/12 gap-5 my-14 mx-auto">
                {
                    menu.map(item=> <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default Popular;