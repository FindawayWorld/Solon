import React, { useState } from 'react';
import classnames from 'classnames';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const FontTester = () => {
    const [pxSize, setPxSize] = useState(26);
    const [lineHeight, setPxLineHeight] = useState(1);
    const [text, setText] = useState('');
    const [weight, setWeight] = useState('normal');
    const [fontFamily, setFontFamily] = useState('RASourceSansPro');
    const [classNames, setClassNames] = useState('');

    return (
        <section className="container">
            <h1 className="my-6">Font Tester</h1>
            <p>Use this page to test how text will be displayed.</p>
            <hr />
            <article className="my-6">
                <label htmlFor="txt">Text:</label>
                <textarea
                    className="py-2 mx-auto"
                    defaultValue={text}
                    name="txt"
                    placeholder="ex: Hello World!"
                    style={{ width: '100%', maxWidth: '675px' }}
                    onChange={(e) => setText(e.target.value)}
                />
            </article>
            <article className="row col-xs-12 my-6" style={{ height: 'fit-content' }}>
                {' '}
                <p style={{ width: '150px' }}>Font Size: {pxSize}px </p>
                <button
                    className="btn p-0 m-0 pr-2"
                    style={{ height: 'fit-content' }}
                    onClick={() => setPxSize(pxSize + 1)}
                >
                    <FaArrowUp size={18} color={'#0074d9'} />
                </button>
                <button className="btn p-0 m-0" onClick={() => setPxSize(pxSize - 1)} style={{ height: 'fit-content' }}>
                    <FaArrowDown size={18} color={'#0074d9'} />
                </button>
            </article>
            <article className="col-xs-12 row my-6" style={{ height: 'fit-content' }}>
                <p style={{ width: '150px' }}>Line Height: {lineHeight}</p>
                <button
                    className="btn p-0 m-0 pr-2"
                    onClick={() => setPxLineHeight(lineHeight + 0.25)}
                    style={{ height: 'fit-content' }}
                >
                    <FaArrowUp size={18} color={'#0074d9'} />
                </button>
                <button
                    className="btn p-0 m-0"
                    onClick={() => setPxLineHeight(lineHeight - 0.25)}
                    style={{ height: 'fit-content' }}
                >
                    <FaArrowDown size={18} color={'#0074d9'} />
                </button>
            </article>

            <article className="col-xs-12 row my-6">
                {' '}
                <p className="mt-2 mr-6">Font Weight:</p>
                <div className="row mb-4">
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
            </article>
            <article className="row col-xs-12 mt-2">
                <label htmlFor="fontfamily">Font Family:</label>
                <select
                    name="fontfamily"
                    className="ml-5 py-2"
                    style={{ fontFamily: fontFamily }}
                    onChange={(e) => setFontFamily(e.target.value)}
                >
                    <option value="RASourceSansPro">Source Sans Pro Regular</option>
                    <option value="RASourceSansProLight">Source Sans Pro Light</option>
                    <option value="RASourceSansProSemiBold">Source Sans Pro SemiBold</option>
                    <option value="RASourceSansProBold">Source Sans Pro Bold</option>
                    <option value="Magorian">Magorian</option>
                    <option value="acumin-pro, sans-serif">Acumin Pro, sans-serif</option>
                    <option value="Open Sans, sans-serif">Open Sans, sans-serif</option>
                    <option value="HCoGotham">Gotham Bold</option>
                    <option value="HCoGothamBook">Gotham Book</option>
                    <option value="quincyBold">Quincy Bold</option>
                    <option value="crayonregular">character-regular</option>
                </select>
            </article>
            <article className="my-6">
                <h4>Test Margin &amp; Padding</h4>
                <label htmlFor="classNames">
                    See <a href="/#/utils">Utils</a> Margin or Padding Examples
                </label>
                <label htmlFor="classNames">m=margin p=padding t=top l=left r=right b=bottom</label>
                <input
                    className="m-3 p-2 mx-auto"
                    defaultValue={classNames}
                    style={{ width: '50%' }}
                    name="classNames"
                    placeholder="ex: mt-4 mb-0 pt-4 pb-0 m-5"
                    onChange={(e) => setClassNames(e.target.value)}
                />
            </article>
            <article className="my-6">
                <h2>Text Mockup</h2>
                <div style={{ border: '1px solid black', width: '100%', height: 'fit-content' }}>
                    <div className={classNames} style={{ backgroundColor: '#0074d9', color: 'white' }}>
                        <p
                            style={{
                                fontSize: `${pxSize}px`,
                                lineHeight: lineHeight,
                                fontFamily: fontFamily,
                                minWidth: '100%',
                                fontWeight: weight,
                                margin: 0
                            }}
                        >
                            {text}
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default FontTester;
