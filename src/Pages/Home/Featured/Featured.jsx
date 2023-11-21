import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className="bg-fixed" style={{backgroundImage: `url(${featuredImg})`}}> 
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-2 w-11/12 mx-auto py-24 px-36">
                <div>
                <img className="w-[320px] h-[200px]" src={featuredImg} alt="" />
                </div>
                <div className="text-white">
                    <p>March 20, 2023 <br />
                        WHERE CAN I GET SOME? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;