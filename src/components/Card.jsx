import React, { useState, useEffect } from 'react';
import ConverterDateUnix from'./Atoms/ConverterDateUnix.jsx'
import ConverterMonthUnix from'./Atoms/ConverterMonthUnix.jsx'
import { Link } from "react-router-dom";
import 'react-slideshow-image/dist/styles.css'
import ImageSlider from './Atoms/ImageSlider.jsx';
// import data from "../mocks/dummy.json"

function Card() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/data");
                const jsonData = await response.json();
                console.log(jsonData)
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            {data ? (
                <section className="flex products">
                    {data.map(item => {
                        const wishlist = item.wishlist ? "visible" : "hidden";
                        const wishlist2 = item.wishlist ? "hidden" : "visible";
                        const guestFav = item.favorite ? "visible" : "hidden";
                        const month = ConverterMonthUnix(item.date);
                        const date = ConverterDateUnix(item.date);
                        return (<div key={item.id} className="card-product">
                            <div>       
                                <ImageSlider data={item.picture}/>
                                <div className="mx-2">
                                    <div>
                                        <h2 id="guest-fav" className={`text-fav ${guestFav}`}>Guest favorite</h2>
                                        <div className={`zoom love-product ${wishlist}`}><i className="fa-solid fa-heart fill-white text-white"></i></div>
                                        <div className={`zoom love-product ${wishlist2}`}><i className="fa-regular fa-heart fill-white text-white"></i></div>
                                    </div>
                                    <div className="rating">
                                        <Link to="ProductDetail" className='text-black'>
                                            <h2>{`${item.address}, ${item.country}`}</h2>
                                        </Link>
                                        <h2 className="right">&#9733; {item.star}</h2>
                                    </div>
                                    <p className="color-product">{item.distance} kilometers away</p>
                                    <p className="color-product">{month} {date}</p>
                                    <p><strong>{new Intl.NumberFormat('id-id', { style: 'currency', currency: 'IDR' }).format(item.price)}</strong> night</p>
                                </div>

                            </div>

                        </div>
                        )
                    })}
                </section>
            ) : (
                <p>Loading... Please do <span className='text-rose-600 font-bold'>npx json-server ./src/mocks/dummy.json</span> then <span className='text-rose-600 font-bold'>refresh this page</span></p>
            )}
        </div>
    );
}
export default Card;