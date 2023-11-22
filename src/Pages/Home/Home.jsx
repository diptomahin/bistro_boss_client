import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Popular from "./Popular/Popular";
import Testimonials from "./Testimonials/Testimonials";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <Popular></Popular>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;