export const fetchData = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/properties");
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};