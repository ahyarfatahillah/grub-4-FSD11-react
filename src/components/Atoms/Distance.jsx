import React from 'react';

const haversine = (lat1, lon1, lat2, lon2) => {
    const toRadians = (degree) => degree * (Math.PI / 180);

    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));
    const r = 6371; // Radius of Earth in kilometers

    return c * r;
};

const DistanceDisplay = ({ userLat, userLon, homeLat, homeLon }) => {
    const distance = haversine(userLat, userLon, homeLat, homeLon);

    return (
        <p className="color-product">{distance.toFixed(2)} kilometers away</p>
    );
};

export default DistanceDisplay;
