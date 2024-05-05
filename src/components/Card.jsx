import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
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
    function monthName(data) {
        const date = new Date(data * 1000);
        const month = date.getMonth();
        const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const monthName = monthList[month];
        return monthName;
    }

    function dateConverter(data) {
        const dateUnix = new Date(data * 1000);
        const dateNew = dateUnix.getDate();
        return dateNew;
    }
    function isImage(data) {
        if (data.length < 2) {
            return (<img className="img-product" src={data} alt="img-card" />)
        } else {
            return (
                <div className='slide'>
                    <Slide autoplay={false}>
                        {data.map((each, index) => (<Link to="ProductDetail" ><img className="img-product" src={each} /></Link>))}
                    </Slide>
                </div>)
        }
    }
    return (
        <div className="xl:mt-[200px] mb-[20px]">
            {data ? (
                <section className="flex products">
                    {data.map(item => {
                        const wishlist = item.wishlist ? "visible" : "hidden";
                        const wishlist2 = item.wishlist ? "hidden" : "visible";
                        const guestFav = item.favorite ? "visible" : "hidden";
                        const month = monthName(item.date);
                        const date = dateConverter(item.date);
                        return (<div key={item.id} className="card-product">
                            <div>       
                                {isImage(item.picture)}
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
                                    <p className="color-product">{month} {dateConverter(date)}</p>
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