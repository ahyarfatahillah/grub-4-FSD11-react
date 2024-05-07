import React, { useState, useEffect } from 'react';
import CardDisplay from './Molecules/CardDisplay';

function Card() {
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
        <div>
            {data ? (
                <CardDisplay data={data} />
            ) : (
                <p>Loading... Please do <span className='text-rose-600 font-bold'>npx json-server ./src/mocks/dummy.json</span> then <span className='text-rose-600 font-bold'>refresh this page</span></p>
            )}
        </div>
    );
}
export default Card;
