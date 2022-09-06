import React from 'react';

const Accessibility = () => {
    return (
        <section>
            <h2>Accessibility</h2>
            <p>Elements (such as Buttons, Images, Icons) without text must include aria attributes.</p>
            <p>The purpose of the element visually must also be represented audibly.</p>
            <p>2 Examples of a button icon without text:</p>
            <div className="flash mb-6">
                <code>
                    <p className="mb-0">
                        <small>{`<button aria-label="Expand Sidebar">`}</small>
                    </p>
                    <p className="mb-0 ml-4">
                        <small>{` <FaChevronLeft aria-hidden />`}</small>
                    </p>
                    <p className="mb-0">
                        <small> {`  </button>`}</small>
                    </p>
                </code>
            </div>
            <div className="flash">
                <code>
                    <p className="mb-0">
                        <small>{`<button>`}</small>
                    </p>
                    <p className="mb-0 ml-4">
                        <small>
                            {` <VisuallyHidden>Expand Sidebar</VisuallyHidden>`}
                            <br />
                            {` <FaChevronLeft aria-hidden />`}
                        </small>
                    </p>
                    <p className="mb-0">
                        <small> {`  </button>`}</small>
                    </p>
                </code>
            </div>
        </section>
    );
};

export default Accessibility;
