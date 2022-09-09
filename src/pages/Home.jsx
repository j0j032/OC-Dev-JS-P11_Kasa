import React from 'react';
import Header from "../components/Header/Header";
import FlatList from "../components/flatList/FlatList";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className={'banner'}> {/*style in app.scss*/}
                <img src={`./bannerCover1.jpg`} alt={'paysage'}/>
                <span>Chez vous, partout et ailleurs</span>
            </div>
            <FlatList/>
            <Footer/>
        </div>
    );
};

export default Home;
