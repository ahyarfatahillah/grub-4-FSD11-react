export const fetchData = async () => {
    const port = import.meta.env.VITE_API_PORT
    const url = `http://localhost:${port}/api/properties`;

    try {
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
