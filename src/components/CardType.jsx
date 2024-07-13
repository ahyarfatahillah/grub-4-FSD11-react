import React, { useState, useEffect } from 'react';
import TinyHomes from './Molecules/TinyHomes';
import { fetchData } from '../services/Properties'; 

function CardType({ filterType }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            const jsonData = await fetchData();
            setData(jsonData);
        };
        
        fetchDataAndSetData();
    }, []);

    return (
        <div className="main-container sm:mt-[80px] md:mt-[170px] lg:mt-[170px]">
            {data ? (
                <TinyHomes data={data} filterType={filterType} />
            ) : (
                <p>Loading... Please Refresh This Page</p>
            )}
        </div>
    );
}

export default CardType;
