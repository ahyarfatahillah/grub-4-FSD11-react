import { useState, useEffect } from 'react';

const CurrentGeolocation = () => {
    const [userLat, setUserLat] = useState(null);
    const [userLon, setUserLon] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLat(position.coords.latitude);
            setUserLon(position.coords.longitude);
        });
    }, []);

    return { userLat, userLon };
};

export default CurrentGeolocation;