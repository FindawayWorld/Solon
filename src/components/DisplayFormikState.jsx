import React from 'react';
import Code from './Code';
const DisplayFormikState = (props) => (
    <div>
        <label>Formik State</label>
        <Code lang="json" code={JSON.stringify(props, null, 4)} />
    </div>
);

export default DisplayFormikState;
