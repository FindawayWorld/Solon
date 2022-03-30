import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
import Code from '../../components/Code';
import Modal from '../../components/Modal';

const ModalPage = () => {
    const [currentModal, setCurrentModal] = React.useState(null);
    return (
        <section id="modal" className="mb-5">
            <Breadcrumbs>
                <BreadcrumbItem as={Link} to="/components">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem current>Modal</BreadcrumbItem>
            </Breadcrumbs>
            <h2>Modal</h2>
            <hr />

            <p>
                <strong>Required assets:</strong> <code>scss/mods/_modal.scss</code>, <code>scss/_settings.scss</code>,
                and <code>scss/_functions.scss</code>
            </p>

            <p>
                Built on top of{' '}
                <a href="https://reach.tech/dialog/" target="_blank" rel="noopener noreferrer">
                    @reach/dialog
                </a>
            </p>

            <p>Display a "Modal" dialog.</p>

            <div className="mb-6">
                <button className="btn btn-primary mr-4" onClick={() => setCurrentModal('a')}>
                    Show Modal
                </button>
                <Modal
                    label="Standard top aligned modal"
                    visible={currentModal === 'a'}
                    onClose={() => setCurrentModal(null)}
                >
                    <h1>Modal</h1>
                    <p>
                        By default modal windows will be centered horizontally, and fixed to <code>2rem</code> from the
                        top of the window. To center a modal both vertically and horizontally use the{' '}
                        <code>center</code> prop.
                    </p>
                </Modal>

                <button className="btn btn-primary" onClick={() => setCurrentModal('centered')}>
                    Show Centered Modal
                </button>
                <Modal
                    label="Centered modal"
                    visible={currentModal === 'centered'}
                    onClose={() => setCurrentModal(null)}
                    center
                >
                    <h1>Centered Modal</h1>
                    <p>
                        This modal will always be centered both vertically and horizontally in the window.{' '}
                        <strong>WARNING:</strong> This could cause content to get cut off on certain screen heights.
                    </p>
                </Modal>
            </div>

            <Code
                className="mb-6"
                lang="jsx"
                code={`<Modal
    center = {boolean},
    disableOverlayClick = {boolean},
    innerClassName = {string},
    label = {string},
    onClose = {function},
    showClose = {boolean},
    visible = {boolean}
>
    // Any JSX Content
</Modal>`}
            />

            <h3>Labels</h3>
            <p>
                For accessibility it is <strong>required</strong> that you provide a <code>label</code> to every modal.
                This is just a descriptive text, ususally whatever the title or header text is for that modal.
            </p>
        </section>
    );
};

export default ModalPage;
