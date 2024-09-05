import { useState, useEffect } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            }
            catch {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }

        fetchData();

    },[url])

    return {loading, error, data}
}

export default useFetch;