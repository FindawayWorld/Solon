import React from 'react';
import classnames from 'classnames';
import { brandColors } from './Content';

const JSPage = () => (
    <>
        <section className="mb-5">
            <h2 className="mb-0">Javascript Utils</h2>
            <p><small>Found in <code>src/utils/index.js</code></small></p>
            <hr/>

            <h3><code>titleCase → {`{String}`}</code></h3>
            <p>Function to format a string as Title Case.</p>
            <p><strong>Example:</strong> <code>"the hunger games" → "The Hunger Games"</code></p>

            <h4>Parameters</h4>

            <table className="table mb-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>str</td>
                        <td>string</td>
                        <td>String to title case</td>
                    </tr>
                </tbody>
            </table>

            <h3><code>demangle → {`{String}`}</code></h3>
            <p>Function to "demangle" a title.</p>
            <p><strong>Example:</strong> <code>"Hunger Games, The" → "The Hunger Games"</code></p>
            <p><strong>Example:</strong> <code>"Shell Game, The: A Fox and O'Hare Short Story" → "The Shell Game: A Fox and O'Hare Short Story"</code></p>

            <table className="table mb-3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>title</td>
                        <td>string</td>
                        <td>Title to "demangle"</td>
                    </tr>
                </tbody>
            </table>

        </section>
    </>
);

export default JSPage;