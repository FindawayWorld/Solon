import React, { useMemo } from 'react';
import { useAxiosGetById } from '../../hooks/useAxiosGetById';
// import {useRouteMatch} from 'react-router-dom';
// import { useWhyDidYouUpdate } from '../../hooks/useWhyDidYouUpdate';
export const UseAxiosGetByIdExample = props => {
    // useWhyDidYouUpdate('UseAxiosGetByIdExample', props);
    /*
        Typical scenario: extract id from url, though id can come from elsewhere (i.e. user form input)
    */
    // const {
    //     params: { id },
    // } = useRouteMatch();
    const id = useMemo(() => {
        return '1';
    }, []);

    const baseUrl = useMemo(() => {
        return 'https://jsonplaceholder.typicode.com/todos/';
    }, []);

    const headers = useMemo(() => {
        return {};
    }, []);

    const [data, isLoading, isError] = useAxiosGetById(baseUrl, headers, id);

    if (isLoading) return <h1>Loading...</h1>;

    if (isError) return <h1>An error occurred...</h1>;

    return (
        <div>
            <h5>UseAxiosGetByIdExample</h5>
            <p>Fetched data:</p>
            <div style={{ color: 'gray', background: '#121212' }}>
                {data && <pre>{JSON.stringify(data?.data, null, 2)}</pre>}
            </div>
        </div>
    );
};

export default UseAxiosGetByIdExample;
