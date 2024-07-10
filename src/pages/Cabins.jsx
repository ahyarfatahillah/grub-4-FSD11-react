import React from 'react';
import Header from "../components/Headerh";
import Footer from "../components/Footerh";
import CardType from '../components/CardType';

const Cabins = () => {
    return (
        <div>
            <Header isHidden={false} />
            <CardType filterType="Cabins" />
            <Footer />
        </div>
    );
};

export default Cabins;
