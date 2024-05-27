import React, { useState, useEffect } from 'react';
import ConverterDateUnix from '../Atoms/ConverterDateUnix.jsx';
import ConverterMonthUnix from '../Atoms/ConverterMonthUnix.jsx';
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css';
import ImageSlider from "../Atoms/ImageSlider.jsx";

function CardDisplay({ data }) {
    const [displayCount, setDisplayCount] = useState(20);
    const [wishlist, setWishlist] = useState({});

    useEffect(() => {
        // Initialize wishlist state based on item.wishlist values
        const initialWishlistState = {};
        data.forEach(item => {
            initialWishlistState[item.id] = item.wishlist;
        });
        setWishlist(initialWishlistState);
    }, [data]);

    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 20);
    };

    const toggleWishlist = (id) => {
        setWishlist(prevWishlist => ({
            ...prevWishlist,
            [id]: !prevWishlist[id]
        }));
    };

    const filteredData = Array.isArray(data) ? data.filter(item => item.wishlist) : [];

    return (
        <section className="products">
            <div className="flex products">
                {filteredData.slice(0, displayCount).map(item => {
                    const guestFav = item.favorite ? "visible" : "hidden";
                    const month = ConverterMonthUnix(item.date);
                    const date = ConverterDateUnix(item.date);
                    const addressHome = `${item.address}, ${item.country}`;
                    const addressEllipsis = addressHome.length > 24 ? addressHome.substring(0, 20) + "..." : addressHome;
                    const isWishlisted = wishlist[item.id];

                    return (
                        <div key={item.id} className="mt-2 card-product">
                            <div>
                                <ImageSlider data={item.picture} />
                                <div className="mx-2">
                                    <div>
                                        <h2 id="guest-fav" className={`text-fav ${guestFav}`}>Guest favorite</h2>
                                        <div 
                                            className="zoom love-product visible" 
                                            onClick={() => toggleWishlist(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i className={`fa-heart ${isWishlisted ? 'fa-solid' : 'fa-regular'} fill-white text-white`}></i>
                                        </div>
                                    </div>
                                    <div className="rating">
                                        <Link to={`../ProductDetail/${item.id}`} className='text-black'>
                                            <h2>{addressEllipsis}</h2>
                                        </Link>
                                        <h2 className="right">&#9733; {item.star}</h2>
                                    </div>
                                    <p className="color-product">{item.distance} kilometers away</p>
                                    <p className="color-product">{month} {date}</p>
                                    <p><strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</strong> night</p>
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
