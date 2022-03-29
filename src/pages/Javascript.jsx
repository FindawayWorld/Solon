import React from 'react';
import Code from '../components/Code';

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

            <div className="mb-8">
                <h3>
                    <code>titleCase(str) → {`{String}`}</code>
                </h3>
                <p>Function to format a string as Title Case.</p>
                <p>
                    <strong>Example:</strong> <code>"the hunger games" → "The Hunger Games"</code>
                </p>
                <Code
                    lang="javascript"
                    code={`import { titleCase } from '/path/to/utils';\nlet newTitle = titleCase('the hunger games'); // The Hunger Games`}
                />
            </div>

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

                <Code
                    lang="javascript"
                    code={`import { demangle } from '/path/to/utils';\nlet newTitle = demangle('Hunger Games, The'); // The Hunger Games`}
                />
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
            <Code lang="javascript" code={`import { asc } from 'path/to/utils/sorts';\n[].sort((x,y) => asc(x,y))`} />

            <h3>
                <code>desc</code>
            </h3>
            <p>
                Function to sort an array descending based on passed values. This is to be used with the{' '}
                <code>Array.sort</code> method.
            </p>
            <Code lang="javascript" code={`import { desc } from 'path/to/utils/sorts';\n[].sort((x,y) => desc(x,y))`} />
        </section>
    </>
);

export default JSPage;
