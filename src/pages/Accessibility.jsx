import React from 'react';
import Code from '../components/Code';

const Accessibility = () => {
    return (
        <>
            <div className="mb-12">
                <h2>Accessibility</h2>
                <p>Elements (such as Buttons, Images, Icons) without text must include aria attributes.</p>
                <p>The purpose of the element visually must also be represented audibly.</p>
            </div>
            <section className="mb-12">
                <h3>Aria-hidden and Focusable Attributes</h3>
                <hr />
                <div className="flash">
                    <p>
                        It's good practice to include <code>focusable="false"</code> with <code>aria-hidden</code>{' '}
                        because the attribute
                        <code> aria-hidden="true"</code> hides an element and all its children from assistive
                        technologies, but users can still use the keyboard to navigate to any focusable child elements,
                        but their content is inaccessible to people who use assistive technologies.
                    </p>
                    <p>Button icon without text examples:</p>
                    <div className="flash mb-6 bg-black">
                        <Code
                            lang="html"
                            code={`<button aria-label="Expand Sidebar">
    <FaChevronLeft aria-hidden focusable="false"/>
</button>`}
                        />
                    </div>
                    <div className="flash bg-black mb-6">
                        <Code
                            lang="html"
                            code={`<button>
    <VisuallyHidden>Expand Sidebar</VisuallyHidden>
    <FaChevronLeft aria-hidden focusable="false" />
</button>`}
                        />
                    </div>
                    <p>
                        <strong>Summary:</strong> Both examples above have the <code>aria-hidden</code> attribute -
                        defaulting to <code>true</code> when present. Since they are wrapped in a button that has
                        either, an aria-label or text within the <code>VisuallyHidden</code>, the screen reader will
                        read that the element is a button and read the button's purpose, the label. Therefore the screen
                        reader never needs to focus on the icon, which is why we set <code>aria-hidden</code> to{' '}
                        <code>true</code> and <code>focusable</code> to <code>false</code>.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h3>Outline Style</h3>
                    <hr />
                    <p className="flash">
                        <strong>Summary:</strong> If <code>outline</code> is set to <code>0</code> or <code>none</code>,
                        <span className="fw-bold"> MUST</span> add some style to capture the eye and show focus within
                        the respective style block,. ex; <code>background-color</code> or <code>border-color</code>.
                        When a user tabs through the page they must be able to see where focus lies.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Accessibility;
