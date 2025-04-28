import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import BottomBanner from "../components/BottomBanner";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/ChooseUs";

const Home = () => {
    return (
        <div className='mt-10'>
        <MainBanner />
        <Categories />
        <ProductCard />
        <BottomBanner />
        <WhyChooseUs/>
        <Footer />
        </div>
    )
}
export default Home;
