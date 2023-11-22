
import Cover from './../../Components/Cover/Cover';
import OurShopImg from '../../assets/shop/banner2.jpg'
import UseMenu from './../../Hooks/UseMenu/UseMenu';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';

import FoodCategory from './FoodCategory/FoodCategory';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OurShop = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')    
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
             <Helmet>
                <title>Bistro | Shop</title>
            </Helmet>
            <Cover img={OurShopImg} title={'OUR SHOP'} description={'Would you like to try a dish?'}></Cover>
            <div className='my-10 text-center  mx-10'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel>
                  <FoodCategory items={salad}></FoodCategory>
                </TabPanel>
                <TabPanel>
                <FoodCategory items={pizza}></FoodCategory>
                </TabPanel>
                <TabPanel>
                <FoodCategory items={soup}></FoodCategory>
                </TabPanel>
                <TabPanel>
                <FoodCategory items={dessert}></FoodCategory>
                </TabPanel>
                <TabPanel>
                <FoodCategory items={drinks}></FoodCategory>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default OurShop;