import React from 'react';

const GuestFavorite = ({ favorite }) => {
    const guestFav = favorite >= 4 ? "visible" : "hidden";
    return <h2 id="guest-fav" className={`text-fav ${guestFav}`}>Guest favorite</h2>;
};

export default GuestFavorite;
