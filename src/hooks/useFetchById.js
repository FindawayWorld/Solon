import {useState, useEffect} from 'react';
import axios from 'axios';

export const useFetchById = (id, sessionKey) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchData(id) {
            let res = null;
            setIsLoading(true);
            try {
                res = await axios.request({
                    method: 'GET',
                    url: `https://api.findawayworld.com/v4/audiobooks/${id}`,
                    headers: {
                        'Session-Key': sessionKey, // TODO: replace headers as required by api.
                    },
                });
                setData(res?.data);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        }

        fetchData(id);
    }, [id, sessionKey]); // TODO: update hook dependencies as required by specific use case.

    return [data, isLoading, isError];
};

export default useFetchById