import React from 'react';
import Distance from '../Atoms/Distance.jsx';

const HomeLocation = ({ userLat, userLon, homeLat, homeLon }) => {
    return (
        <Distance userLat={userLat} userLon={userLon} homeLat={homeLat} homeLon={homeLon} />
    );
};

export default HomeLocation;