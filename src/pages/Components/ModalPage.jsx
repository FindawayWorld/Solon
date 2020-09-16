import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbItem, Breadcrumbs } from '../../components/Breadcrumbs';
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

            <button className="btn btn-primary mb-3" onClick={() => setCurrentModal('a')}>
                Show Modal
            </button>
            <Modal visible={currentModal === 'a'} onClose={() => setCurrentModal(null)}>
                <h1>Modal</h1>
                <p>
                    By default modal windows will be centered horizontally, and fixed to <code>2rem</code> from the top
                    of the window. To center a modal both vertically and horizontally use the <code>center</code> prop.
                </p>
            </Modal>

            <button className="btn btn-primary" onClick={() => setCurrentModal('centered')}>
                Show Centered Modal
            </button>
            <Modal visible={currentModal === 'centered'} onClose={() => setCurrentModal(null)} center>
                <h1>Centered Modal</h1>
                <p>
                    This modal will always be centered both vertically and horizontally in the window.{' '}
                    <strong>WARNING:</strong> This could cause content to get cut off on certain screen heights.
                </p>
            </Modal>
        </section>
    );
};

export default ModalPage;