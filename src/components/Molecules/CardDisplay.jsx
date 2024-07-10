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

function CardDisplay({ data, userId }) {
    const [displayCount, setDisplayCount] = useState(20);
    const [wishlist, setWishlist] = useState({});

    // useEffect(() => {
    //     // Fetch wishlist data from the database
    //     const fetchWishlistData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:3001/api/wishlists?userID=${userId}`);
    //             const wishlistData = await response.json();
    //             const initialWishlistState = {};
    //             data.forEach(item => {
    //                 initialWishlistState[item.id] = wishlistData.includes(item.id);
    //             });
    //             setWishlist(initialWishlistState);
    //         } catch (error) {
    //             console.error('Failed to fetch wishlist data:', error);
    //         }
    //     };

    //     fetchWishlistData();
    // }, [data, userId]);

    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 20);
    };

    const toggleWishlist = async (id) => {
        const newWishlistState = !wishlist[id];
        setWishlist(prevWishlist => ({
            ...prevWishlist,
            [id]: newWishlistState
        }));
        try {
            await fetch(`/api/wishlist/toggle`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, propertyId: id, isWishlisted: newWishlistState }),
            });
        } catch (error) {
            console.error('Failed to toggle wishlist status:', error);
        }
    };

    // Geolocation User Current Position
    const { userLat, userLon } = CurrentGeolocation();

    return (
        <section className="products">
            <div className="flex products">
                {data.slice(0, displayCount).map(item => (
                    <div key={item.id} className="mt-2 card-product">
                        <div>
                            <ImageSlider data={item.Images} />
                            <div className="mx-2">
                                <div>
                                    <GuestFavorite favorite={item.star} />
                                    <WishlistIcon userId={userId} itemId={item.id} isWishlisted={wishlist[item.id]} toggleWishlist={toggleWishlist} />
                                </div>
                                <div className="rating">
                                    <Link to={`/ProductDetail/${item.id}`} className='text-black'>
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
                ))}
            </div>
            <div className="my-16 text-center">
                {data.length > displayCount && (
                    <button onClick={handleShowMore} className="my-2 button button1">Show More</button>
                )}
            </div>
        </section>
    );
}

export default CardDisplay;
