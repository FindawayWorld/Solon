import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import TextArea from '../components/form/TextArea';
import Input from '../components/form/Input';
import Select from '../components/form/Select';

const FontTester = () => {
    const [pxSize, setPxSize] = useState(1.5);
    const [lineHeight, setPxLineHeight] = useState(1.5);
    const [text, setText] = useState('Findaway Baby!');
    const [weight, setWeight] = useState('normal');
    const [classNames, setClassNames] = useState('');

    return (
        <section>
            <h1>Font Tester</h1>
            <p>Use this page to test how text will be displayed.</p>

            <hr />

            <TextArea
                label="Text"
                value={text}
                placeholder="ex: Hello World!"
                onChange={(e) => setText(e.target.value)}
            />

            <div className="row bottom-md">
                <div className="col-xs-12 col-md-2">
                    <Input
                        label={
                            <>
                                Font Size (
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#ems_and_rems"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    rem
                                </a>
                                )
                            </>
                        }
                        type="number"
                        step={0.1}
                        min={1.0}
                        value={pxSize}
                        onChange={(e) => setPxSize(e.target.value)}
                    />
                </div>
                <div className="col-xs-12 col-md-2">
                    <Input
                        label={
                            <>
                                Line Height (
                                <a
                                    href="https://allthingssmitty.com/2017/01/30/nope-nope-nope-line-height-is-unitless/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    unitless
                                </a>
                                )
                            </>
                        }
                        type="number"
                        step={0.1}
                        min={1.0}
                        value={lineHeight}
                        onChange={(e) => setPxLineHeight(e.target.value)}
                    />
                </div>
                <div className="col-xs-12 col-md-4">
                    <Select id="weight" label="Font Weight" value={weight} onChange={(e) => setWeight(e.target.value)}>
                        <option value="300">Light (300)</option>
                        <option value="normal">Normal (400)</option>
                        <option value="bold">Bold (700)</option>
                    </Select>
                </div>
                <div className="col-xs-12 col-md-4">
                    <Input
                        label="Test Margin &amp; Padding"
                        id="classnames"
                        placeholder="ex: mt-4 mb-0 pt-4 pb-0 m-5"
                        values={classNames}
                        onChange={(e) => setClassNames(e.target.value)}
                        help={
                            <>
                                See <Link to="/utils">Utils</Link> Margin or Padding Examples
                            </>
                        }
                    />
                </div>
            </div>

            <hr />

            <div className="mb-8">
                <h2>Text Mockup</h2>
                <p>
                    Px Font size: {16 * pxSize}px = <code>(16 * {pxSize})</code>
                </p>
                <div style={{ border: '1px solid black' }}>
                    <div className={classnames('bg-blue txt-white', classNames)}>
                        <p
                            style={{
                                fontSize: `${pxSize}rem`,
                                lineHeight: lineHeight,
                                fontWeight: weight,
                                margin: 0
                            }}
                        >
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FontTester;
