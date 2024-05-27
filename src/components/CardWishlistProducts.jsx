import React, { useState, useEffect } from 'react';
import WishlistPrducts from './Molecules/WishlistProducts';

function CardWishlistProducts() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/data");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="main-container sm:mt-[75px] md:mt-[100px] lg:mt-[100px]">
            {data ? (
                <WishlistPrducts data={data} />
            ) : (
                <p>Loading... Please do <span className='text-rose-600 font-bold'>npx json-server ./src/mocks/dummy.json</span> then <span className='text-rose-600 font-bold'>refresh this page</span></p>
            )}
        </div>
    );
}
export default CardWishlistProducts;
