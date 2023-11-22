
import { Helmet } from 'react-helmet-async';
import MenuImg from '../../../assets/menu/banner3.jpg' 
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Popular from '../../Home/Popular/Popular';
import Cover from '../../../Components/Cover/Cover';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
             <Cover img={MenuImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
             <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <Popular></Popular>
             <Cover img={MenuImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
             <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <Popular></Popular>
             <Cover img={MenuImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
             <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <Popular></Popular>
        </div>
    );
};

export default Menu;