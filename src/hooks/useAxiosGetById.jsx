import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxiosGetById = (baseUrl = '', headers = {}, id = '') => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // console.log('\n', '\n', `baseUrl + id = `, baseUrl + id, '\n', '\n');
        async function fetchData(id) {
            let res = null;
            setIsLoading(true);
            try {
                res = await axios.request({
                    method: 'GET',
                    url: `${baseUrl + id}`,
                    headers: {
                        ...headers,
                    },
                });
                setData(res);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        }

        fetchData(id);
    }, [baseUrl, id, headers]);

    return [data, isLoading, isError];
};

export default useAxiosGetById;

// See demo in src/boiler/UseAxiosGetByIdDemo.jsx
