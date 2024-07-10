import React from 'react';
import Header from "../components/Headerh";
import Footer from "../components/Footerh";
import CardType from '../components/CardType';

const TinyHomesPage = () => {
    return (
        <div>
            <Header isHidden={false} />
            <CardType filterType="Tiny Homes"/>
            <Footer />
        </div>
    );
};

export default TinyHomesPage;
