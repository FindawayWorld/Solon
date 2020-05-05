import React from 'react';
import GWColorLib from '../utils/GWColorLib';
import Input from '../components/form/Input';
import { useState, useEffect } from 'react';

const ColorTester = () => {
    const colorLib = new GWColorLib();
    const [color, setColor] = useState('123456');
    const [activeColor, setActiveColor] = useState('#123456');
    const [styles, setStyles] = useState(colorLib.getStyles(activeColor));

    useEffect(() => {
        setStyles(colorLib.getStyles(activeColor));
    }, [activeColor, colorLib]);

    return (
        <div className="container">
            <style>{styles}</style>

            <h1>Color Tester</h1>
            <p>Use this page to test how colors will display as Button, Flash, and Util classes.</p>
            <hr />
            <Input
                id="color"
                label="Hex Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                prepend="#"
                append={
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setActiveColor(`#${color}`);
                        }}
                    >
                        Test
                    </button>
                }
            />
            <div className="mb-8">
                <button className="btn btn-demo mr-4">Demo Button</button>
                <button className="btn btn-outline-demo">Demo Outline Button</button>
            </div>
            <div className="flash flash-demo">Demo Flash</div>

            <div>
                <div className="txt-demo">Demo colored text</div>
                <div className="bg-demo">Demo background</div>
            </div>
        </div>
    );
};

export default ColorTester;
