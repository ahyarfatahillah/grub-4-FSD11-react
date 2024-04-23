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

  return (
    <div>
      <h1>JSON Data:</h1>
      {data ? (
        <div>
          {data.map(item => (
            <div key={item.id}>
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