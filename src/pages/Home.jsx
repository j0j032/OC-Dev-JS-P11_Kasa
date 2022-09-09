import React from 'react';
import Header from "../components/Header/Header";
import FlatList from "../components/flatList/FlatList";

const Home = () => {
    return (
        <div>
            <Header/>
            <div>
                <img src={`./bannerCover1.jpg`} alt={'paysage'}/>
                <span>Chez vous, partout et ailleurs</span>
            </div>
            <FlatList/>
        </div>
    );
};

export default Home;
