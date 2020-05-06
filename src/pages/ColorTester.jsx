import React from 'react';
import GWColorLib from '../utils/GWColorLib';
import Input from '../components/form/Input';
import { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

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
            <form
                className="mb-8"
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!color) return false;
                    setActiveColor(`#${color}`);
                }}
            >
                <Input
                    id="color"
                    label="Hex Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    prepend="#"
                    append={
                        <button className="btn btn-primary" type="submit">
                            Test
                        </button>
                    }
                />
            </form>
            <div className="mb-8">
                <h2>Buttons</h2>
                <button className="btn btn-demo btn-lg mr-4">Demo Button Large</button>
                <button className="btn btn-demo mr-4">Demo Button</button>
                <button className="btn btn-demo btn-sm mr-4">Demo Button Small</button>
                <button className="btn btn-outline-demo">Demo Outline Button</button>
            </div>
            <div className="mb-8">
                <h2>Links</h2>
                <ul className="list-flat">
                    <li>
                        <a href="#nowhere">Demo Standard</a>
                    </li>
                    <li>
                        <a href="#nowhere" className="cta demo-cta">
                            Demo CTA
                        </a>
                    </li>
                    <li>
                        <a href="#link" className="reverse-cta demo-reverse-cta">
                            Demo Reverse CTA
                        </a>
                    </li>
                    <li>
                        <a href="#link" className="fancy-cta demo-fancy-cta">
                            Demo Fancy CTA w/ SVG <FiArrowRight width="1em" height="1em" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flash flash-demo mb-8">Demo Flash</div>

            <div>
                <div className="txt-demo">Demo colored text</div>
                <div className="bg-demo">Demo background</div>
            </div>
        </div>
    );
};

export default ColorTester;
