import React from 'react';
import { useState } from 'react';
import classnames from 'classnames';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const FontTester = (props) => {
    const [pxSize, setPxSize] = useState(26);
    const [lineHeight, setPxLineHeight] = useState(1);
    const [text, setText] = useState('Test Text Here');
    const [weight, setWeight] = useState('normal');

    return (
        <div>
            <div className="row col-xs-8 col-sm-6 mx-auto">
                {' '}
                <p className="col-xs-12 col-sm-4 mt-6">FontSize: {pxSize}px </p>
                <div className="row col-xs-12 col-sm-2 mb-4">
                    <button className="btn mx-auto" onClick={() => setPxSize(pxSize + 1)}>
                        <FaArrowUp size={16} />
                    </button>
                    <button className="mx-auto btn" onClick={() => setPxSize(pxSize - 1)}>
                        <FaArrowDown size={16} />
                    </button>
                </div>
            </div>
            <div className="row col-xs-8 col-sm-6 mx-auto ">
                <p className="col-xs-12 col-sm-4 mt-6">Line Height: {lineHeight}</p>
                <div className="row col-xs-12 col-sm-2 mb-6">
                    <button className="btn mx-auto" onClick={() => setPxLineHeight(lineHeight + 0.25)}>
                        <FaArrowUp size={16} />
                    </button>
                    <button className="mx-auto btn" onClick={() => setPxLineHeight(lineHeight - 0.25)}>
                        <FaArrowDown size={16} />
                    </button>
                </div>
            </div>
            <div className="row col-xs-8 col-sm-6 mx-auto">
                {' '}
                <p className="col-xs-12 col-sm-4 mt-2">Font Weight:</p>
                <div className="row col-xs-12 col-sm-4 mb-4">
                    <button
                        className={classnames('btn', {
                            'btn-primary': weight === 'normal',
                            'btn-secondary': weight === 'bold'
                        })}
                        onClick={() => setWeight('normal')}
                    >
                        normal
                    </button>
                    <button
                        className={classnames('btn ml-2', {
                            'btn-primary': weight === 'bold',
                            'btn-secondary': weight === 'normal'
                        })}
                        onClick={() => setWeight('bold')}
                        style={{ fontWeight: 'bold' }}
                    >
                        bold
                    </button>
                </div>
            </div>
            <div className="col-xs-12 txt-center">
                <textarea
                    className="py-2 mx-auto"
                    defaultValue={text}
                    style={{ width: '50%' }}
                    name="txt"
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="col-xs-8 col-sm-12 mt-2 txt-center">
                <select className="py-2">
                    <option value="SourceSansPro">Source Sans Pro</option>
                    <option value="AcuminPro">Acumin Pro</option>
                    <option value="Gotha">Gotham</option>
                    <option value="OpenSans">Open Sans</option>
                </select>
            </div>

            <div className="p-6 m-6 txt-center">
                <h2
                    style={{
                        fontSize: `${pxSize}px`,
                        lineHeight: lineHeight,
                        fontFamily: 'Verdana',
                        minWidth: '100%',
                        fontWeight: weight
                    }}
                >
                    {text}
                </h2>
            </div>
        </div>
    );
};

export default FontTester;
