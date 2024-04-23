import React, { useState, useEffect } from 'react';
import data from "../mocks/dummy.json"
function App() {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //       const jsonData = await response.json();
    //       console.log(jsonData)
    //       setData(jsonData);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchData();
    // }, []);
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
    // const wishlist = data.wishlist ? "visible" : "hidden";
    // const wishlist2 = data.wishlist ? "hidden" : "visible";
    // const guestFav = data.favorite ? "visible" : "hidden";
    // const month = monthName(data.date);
    // const date = dateConverter(data.date);
    return (

        <div>
            {data ? (
                
                <section className="flex products">
                    {data.map(item => (
                        <div key={item.id}>
                            {/* <p>{item.id}</p> */}
                            <a href={`#${item.id}`} >
                                <div className="card-product">
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
                                        <p className="color-prdct">{monthName(item.date)} {dateConverter(item.date)}</p>
                                        <p><strong>{item.price}</strong> night</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </section>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;