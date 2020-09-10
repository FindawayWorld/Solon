import React, { useState } from 'react';
import classnames from 'classnames';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
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
        <section className="container">
            <h1 className="my-6">Font Tester</h1>
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
                        label="Font Size (rem)"
                        type="number"
                        step={0.1}
                        min={1.0}
                        value={pxSize}
                        onChange={(e) => setPxSize(e.target.value)}
                    />
                </div>
                <div className="col-xs-12 col-md-2">
                    <Input
                        label="Line Height"
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
                                See <a href="/utils">Utils</a> Margin or Padding Examples
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
