import React, { useState, useEffect } from 'react';
// import data from "../mocks/dummy.json"
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../mocks/dummy.json");
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
      <h1>JSON Data:</h1>  
      {data ? (
        <div className='flex justify-center items-center flex-wrap'>
          {data.map(item => (
            <div key={item.id} className='ml-1'>
              <p>{item.id}</p>
              {/* Add other fields as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;