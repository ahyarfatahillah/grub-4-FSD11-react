import React from 'react';
import Header from "../components/Headerh";
import Footer from "../components/Footerh";
import CardType from '../components/CardType';

const Apartements = () => {
    return (
        <div>
            <Header isHidden={false} />
            <CardType filterType="Apartments"/>
            <Footer />
        </div>
    );
};

export default Apartements;
