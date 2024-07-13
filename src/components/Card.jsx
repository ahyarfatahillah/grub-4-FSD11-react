import React, { useState, useEffect } from 'react';
import CardDisplay from './Molecules/CardDisplay';
import { fetchData } from '../services/Properties'; 

function Card() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataAndSetData = async () => {
            const jsonData = await fetchData();
            setData(jsonData);
        };
        
        fetchDataAndSetData();
    }, []);

    return (
        <div className="main-container sm:mt-[90px] md:mt-[180px] lg:mt-[200px]">
            {data ? (
                <CardDisplay data={data} />
            ) : (
                <p>Loading... Please Refresh This Page</p>
            )}
        </div>
    );
}

export default Card;
