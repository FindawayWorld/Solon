import React from 'react';

const JSPage = () => (
    <>
        <section className="mb-5">
            <h2 className="mb-0">Javascript Utils</h2>
            <p>
                <small>
                    Found in <code>src/utils</code>
                </small>
            </p>
            <hr />

            <h3>
                <code>titleCase(str) → {`{String}`}</code>
            </h3>
            <p>Function to format a string as Title Case.</p>
            <p>
                <strong>Example:</strong> <code>"the hunger games" → "The Hunger Games"</code>
            </p>

            <h4>Parameters</h4>

            <table className="table mb-8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>string</td>
                        <td>string</td>
                        <td>String to title case</td>
                    </tr>
                </tbody>
            </table>

            <div className="mb-8">
                <h3>
                    <code>demangle(title) → {`{String}`}</code>
                </h3>
                <p>Function to "demangle" a title.</p>
                <p>
                    <strong>Example:</strong> <code>"Hunger Games, The" → "The Hunger Games"</code>
                </p>
                <p>
                    <strong>Example:</strong>{' '}
                    <code>
                        "Shell Game, The: A Fox and O'Hare Short Story" → "The Shell Game: A Fox and O'Hare Short Story"
                    </code>
                </p>

                <table className="table mb-8">
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
            </div>

            <h3>
                <code>sorts.js</code>
            </h3>
            <p>Functions to sort arrays</p>
            <h4>
                <code>asc</code>
            </h4>
            <p>
                Function to sort an array ascending based on passed values. This is to be used with the{' '}
                <code>Array.sort</code> method.
            </p>
            <p>
                <code>import {'{ asc }'} from 'path/to/utils/sorts';</code>
            </p>
            <p>
                <strong>Example:</strong> <code>[].sort((x,y) => asc(x,y))</code>
            </p>

            <h3>
                <code>desc</code>
            </h3>
            <p>
                Function to sort an array descending based on passed values. This is to be used with the{' '}
                <code>Array.sort</code> method.
            </p>
            <p>
                <code>import {'{ desc }'} from 'path/to/utils/sorts';</code>
            </p>
            <p>
                <strong>Example:</strong> <code>[].sort((x,y) => desc(x,y))</code>
            </p>
        </section>
    </>
);

export default JSPage;
