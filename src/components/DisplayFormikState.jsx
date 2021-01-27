import React from 'react';
const DisplayFormikState = (props) => (
    <div>
        <label>Formik State</label>
        <pre>
            <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
    </div>
);

export default DisplayFormikState;
