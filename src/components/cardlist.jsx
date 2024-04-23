import React, { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
// import data from "../mocks/dummy.json"
function Datalist() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://6627b4d7b625bf088c0968aa.mockapi.io/products");
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
        const date = new Date(data);
        const month = date.getMonth();
        const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        const monthName = monthList[month];
        return monthName;
    }

    function dateConverter(data) {
        const dateUnix = new Date(data);
        const dateNew = dateUnix.getDate();
        return dateNew;
    }

    return (

        <div>
            {data ? (
                <section className="flex products">
                    {data.map(item => {
                        const wishlist = item.wishlist ? "visible" : "hidden";
                        const wishlist2 = item.wishlist ? "hidden" : "visible";
                        const guestFav = item.favorite ? "visible" : "hidden";
                        const month = monthName(item.date);
                        const date = dateConverter(item.date);
                        return (<div key={item.id} className="card-product">
                            {/* <p>{item.id}</p> */}
                            {/* card product jsx */}
                            <Link to="about">
                                <div>
                                    <img className="img-products" src={item.picture} alt="img-card" />
                                    <div className="mx-2">
                                        <div>
                                            <h2 id="guest-fav" className={`text-fav ${item.favorite ? "visible" : "hidden"}`}>Guest favorite</h2>
                                            <div className={`zoom love-product ${item.wishlist ? "visible" : "hidden"}`}><i className="fa-solid fa-heart fill-white text-white"></i></div>
                                            <div className={`zoom love-product ${item.wishlist ? "hidden" : "visible"}`}><i className="fa-regular fa-heart fill-white text-white"></i></div>
                                        </div>
                                        <div className="rating">
                                            <h2>{`${item.address}, ${item.country}`}</h2>
                                            <h2 className="right">&#9733; {item.star}</h2>
                                        </div>
                                        <p className="color-prdct">{item.distance} kilometers away</p>
                                        <p className="color-prdct">{month} {dateConverter(date)}</p>
                                        <p><strong>{item.price}</strong> night</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )
                    })}
                </section>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Datalist;