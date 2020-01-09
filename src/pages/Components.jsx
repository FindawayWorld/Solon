import React, { useState } from 'react';

import Input from '../components/form/Input';
import Select from '../components/form/Select';
import TextArea from '../components/form/TextArea';
import Checkbox from '../components/form/Checkbox';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

const ComponentsPage = () => {
    const [currentModal, setCurrentModal] = useState(null);
    return (
        <>
            <section id="Buttons" className="mb-5">
                <h2>Buttons</h2>
                <hr/>

                <p>
                    <button className="btn mr-3">Default</button>
                    <button className="btn btn-primary">Primary</button>
                </p>
            </section>

            <section className="mb-5">
                <h2>Pagination</h2>
                <hr/>

                <Pagination
                    numPages={100}
                    perPage={10}
                    currentPage={1}
                />
                <Pagination
                    numPages={1000}
                    perPage={20}
                    currentPage={60}
                />
            </section>

            <section id="modal" className="mb-5">
                <h2>Modal</h2>
                <hr/>

                <button className="btn btn-primary" onClick={() => setCurrentModal('a')}>Show Modal</button>
                <Modal visible={currentModal === 'a'} onClose={() => setCurrentModal(null)}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis consequatur, eveniet neque impedit quia sed facilis eaque quod, sit architecto sint eligendi minus sunt asperiores! Nihil iusto fugiat aliquid blanditiis.</p>
                </Modal>
            </section>

            <section id="forms" className="mb-5">
                <h2>Forms</h2>
                <p>Forms should be built with <a href="https://jaredpalmer.com/formik/">Formik</a>.</p>
                <p>Form markup is derrived from Bootstrap.</p>
                <hr/>

                <h3>Input and Label</h3>
                <hr/>
                <Input
                    label="Text Input"
                    placeholder="Placeholder Text"
                />

                <Input
                    label="Prepend Label"
                    prependLabel={true}
                />

                <Input
                    label="Appended Component"
                    append={<button className="btn btn-primary">Submit</button>}
                />

                <Input
                    label="With Error"
                    errors="This is an error message."
                    touched={true}
                />

                <h3>Select</h3>
                <hr/>
                <div>
                    <Select
                        label="Single Select"
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </Select>

                    <Select
                        label="Multiple Select"
                        multiple
                    >
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </Select>
                </div>

                <h3>Text Area</h3>
                <hr/>
                <TextArea
                            label="Text Area"
                />

                <h3>Checkbox</h3>
                <hr/>
                <Checkbox
                    label="Checkbox"
                    id="checkbox_1"
                />

                <Checkbox
                    label="With Errors"
                    id="error_checkbox"
                    errors="Checkbox error message"
                    touched={true}
                />


            </section>
        </>
    )
};

export default ComponentsPage;