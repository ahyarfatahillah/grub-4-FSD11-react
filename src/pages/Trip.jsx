import React from 'react';
import Header from "../components/Headerh";
import Footer from "../components/Footerh";
import TripCard from '../components/TripCard';

const Trip = () => {
    return (
        <div>
            <Header isHidden={true} />
            <TripCard filterType="Apartments"/>
            <Footer />
        </div>
    );
};

export default Trip;
