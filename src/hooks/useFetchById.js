// import React from 'react';
import { useState, useEffect} from 'react';
// import { useRouteMatch } from 'react-router-dom';
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

export default useFetchById;

/*
    Demo use
*/
// export const MyContrivedExample = props => {
//     /* user would typically be provided by context or global state */
//     const [user] = useState({ name: 'John', sessionKey: '8675309' });
//     /* Extract id from url, though id can come from anywhere */
//     const {
//         params: { id },
//     } = useRouteMatch();
//     /* 
//         In this contrived example the useEffect hook inside useFetchById takes sessionKey as a 
//         dependency and we can memoize user to avoid the hook re-running on account of the user being updated.
//     */
//     const sessionKey = useMemo(() => {
//         return user.sessionKey;
//     }, [user]);

//     const [data, isLoading, isError] = useFetchById(id, sessionKey);

//     if (isLoading) return <h1>Loading...</h1>;

//     if (isError) return <h1>An error occurred...</h1>;

//     return (
//         <div>
//             <h3>Hello MyContrivedExample</h3>
//             {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//         </div>
//     );
// };
