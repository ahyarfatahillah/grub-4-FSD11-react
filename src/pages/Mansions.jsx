import React from 'react';
import Header from "../components/Headerh";
import Footer from "../components/Footerh";
import CardType from '../components/CardType';

const Mansions = () => {
    return (
        <div>
            <Header isHidden={false} />
            <CardType filterType="Mansions"/>
            <Footer />
        </div>
    );
};

export default Mansions;
