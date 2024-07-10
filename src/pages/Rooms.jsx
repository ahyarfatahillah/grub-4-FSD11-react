import React from 'react';
import Header from "../components/Headerh";
import Footer from "../components/Footerh";
import CardType from '../components/CardType';

const Rooms = () => {
    return (
        <div>
            <Header isHidden={false} />
            <CardType filterType="Rooms"/>
            <Footer />
        </div>
    );
};

export default Rooms;
