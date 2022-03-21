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

            <h3>Props</h3>
            <table className="table full-width mb-6">
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>center</td>
                        <td>
                            <em>Boolean</em> <strong>Default: false</strong>
                        </td>
                        <td>Center vertcially and horiztonally within the browser window</td>
                    </tr>
                    <tr>
                        <td>disableOverlayClick</td>
                        <td>
                            <em>Boolean</em> <strong>Default: false</strong>
                        </td>
                        <td>Disable clicking on the overlay to close</td>
                    </tr>
                    <tr>
                        <td>innerClassName</td>
                        <td>
                            <em>String</em> <strong>Default: ''</strong>
                        </td>
                        <td>Set a class name on the DialogContent element</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>
                            <em>String</em> <strong>Default: ''</strong>
                        </td>
                        <td>
                            Label for the modal, provide context.{' '}
                            <a href="https://reach.tech/dialog/#labeling">https://reach.tech/dialog/#labeling</a>
                        </td>
                    </tr>
                    <tr>
                        <td>onClose</td>
                        <td>
                            <em>Function</em> <strong>Default: noop</strong>
                        </td>
                        <td>Function to call when closing the modal</td>
                    </tr>
                    <tr>
                        <td>showClose</td>
                        <td>
                            <em>Boolean</em> <strong>Default: true</strong>
                        </td>
                        <td>Show or hide the close (x)</td>
                    </tr>
                    <tr>
                        <td>visible</td>
                        <td>
                            <em>Boolean</em> <strong>Default: false</strong>
                        </td>
                        <td>Set the modal visible or hidden</td>
                    </tr>
                </tbody>
            </table>

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
                    By default modal windows will be centered horizontally, and fixed to <code>2rem</code> from the top
                    of the window. To center a modal both vertically and horizontally use the <code>center</code> prop.
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

            <pre>
                <code>{`<Modal
    center = {true | false},
    disableOverlayClick = {true | false},
    innerClassName = "STRING",
    label = "STRING",
    onClose = {function},
    showClose = {true | false},
    visible = {true | false}
>
    // Any JSX Content
</Modal>`}</code>
            </pre>
        </section>
    );
};

export default ModalPage;
