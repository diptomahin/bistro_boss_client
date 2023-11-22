
import { Helmet } from 'react-helmet-async';
import MenuImg from '../../../assets/menu/banner3.jpg' 
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Cover from '../../../Components/Cover/Cover';
import UseMenu from './../../../Hooks/UseMenu/UseMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'



const Menu = () => {
    const [menu] = UseMenu();
    const offered = menu.filter(item => item.category === 'offered' )
    const dessert = menu.filter(item => item.category === 'dessert' )
    const pizza = menu.filter(item => item.category === 'pizza' )
    const salad = menu.filter(item => item.category === 'salad' )
    const soup = menu.filter(item => item.category === 'soup' )

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
             <Cover img={MenuImg} title={'OUR MENU'} description={'Would you like to try a dish?'}></Cover>
             <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
             <MenuCategory items={offered} ></MenuCategory>
             <MenuCategory items={dessert} title={'DESSERTS'} img={dessertImg} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
             <MenuCategory items={pizza} title={'PIZZA'} img={pizzaImg} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
             <MenuCategory items={salad} img={saladImg} title={'SALADS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
             <MenuCategory items={soup} img={soupImg} title={'SOUPS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
           
        </div>
    );
};

export default Menu;