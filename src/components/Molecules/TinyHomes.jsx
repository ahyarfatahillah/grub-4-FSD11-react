import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import ImageSlider from "../Atoms/ImageSlider.jsx";
import WishlistIcon from "../Atoms/WishlistIcon.jsx";
import CurrentGeolocation from '../Atoms/CurrentGeolocation.jsx';
import GuestFavorite from '../Atoms/GuestFavorite.jsx';
import AddressEllipsis from '../Atoms/AddressEllipsis.jsx';
import FormattedPrice from '../Atoms/FormattedPrice.jsx';
import Rating from '../Atoms/Rating.jsx';
import Month from '../Atoms/Month.jsx';
import DateComponent from '../Atoms/Date.jsx';
import HomeLocation from '../Atoms/HomeLocation.jsx';

function CardDisplay({ data, userId, filterType }) {
    const [displayCount, setDisplayCount] = useState(20);
    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 20);
    };

    const [wishlist, setWishlist] = useState({});
    useEffect(() => {
        // Inisialisasi state dari Wishlist
        const initialWishlistState = {};
        data.forEach(item => { //Untuk Setiap data item
            initialWishlistState[item.id] = item.wishlist; //inisialisasi berdasarkan id dari item.wishlist
        });
        setWishlist(initialWishlistState);
    }, [data]);

    const toggleWishlist = (id) => {
        setWishlist(prevWishlist => ({
            ...prevWishlist,
            [id]: !prevWishlist[id]
        }));
    };

    // Change the filter condition to check if Type matches the filterType prop
    const filteredData = Array.isArray(data) ? data.filter(item => item.type == filterType) : [];
    // Geolocation User Current Position
    const { userLat, userLon } = CurrentGeolocation();

    return (
        <section className="products">
            <div className="font-bold text-3xl px-16 py-4 sm:">{filterType}</div>
            <div className="flex products">
                {filteredData.slice(0, displayCount).map(item => {
                    return (
                        <div key={item.id} className="mt-2 card-product">
                            <div>
                                <ImageSlider data={item.Images} />
                                <div className="mx-2">
                                    <div>
                                        <GuestFavorite favorite={item.star} />
                                        <WishlistIcon userId={userId} itemId={item.id} isWishlisted={wishlist[item.id]} toggleWishlist={toggleWishlist} />
                                    </div>
                                    <div className="rating">
                                        <Link to="/ProductDetail" className='text-black'>
                                            <AddressEllipsis address={item.address} country={item.country} />
                                        </Link>
                                        <Rating star={item.star} />
                                    </div>
                                    <HomeLocation userLat={userLat} userLon={userLon} homeLat={item.lat} homeLon={item.lon} />
                                    <p className="color-product"><Month timestamp={item.availabilityDateFrom} /> <DateComponent timestamp={item.availabilityDateFrom} /></p>
                                    <FormattedPrice price={item.price} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="my-16 text-center">
                {filteredData.length > displayCount && (
                    <button onClick={handleShowMore} className="my-2 button button1">Show More</button>
                )}
            </div>
        </section>
    );
}

export default CardDisplay;
