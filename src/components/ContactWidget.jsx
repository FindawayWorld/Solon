import React from 'react';
import Input from "./form/Input"
import TextArea from "./form/TextArea"
import Select from "./form/Select"
import {Formik} from 'formik';
import axios from 'axios';
import { FaChevronDown,FaChevronUp } from 'react-icons/fa';

const handleClick=(values)=>{
    console.log(values)
    const url=`https://mrcontact-dev.findaway.com/${values.id}`;
        axios({
            method: 'POST',
            url: url,
            dataType: 'json',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify({
                "email":values.email,
                "organization_name":values.orgName,
                "name":values.name,
                "phone":values.phone,
                "organization_type":values.orgType,
                "message":values.notes,
            }),
            redirect:"/"
        })
        .then(
            function success(response) {
            //hide form 
            //alert form was submitted
                console.log(response)
            },
            function fail(status) {
                alert(`${status}:Something has gone wrong`);
            }
        );
}
const ContactWidget = props => {
    
    return (
        <div className="contactWidgetContainer p-0">
            <button class="button-one p-3">Request More Information <span className="ml-4"><FaChevronDown size={14}/></span></button>
            <Formik
                initialValues={{ id:props.id,email: '', orgType: '' , name:'',orgName:'',notes:'',phone:''}}
                validate={values => {
                    console.log('validate')
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log("click")
                   setTimeout(() => {
                    alert(JSON.stringify(values, null, 2)); 
                    console.log(values)
                    setSubmitting(true);
                   
                  }, 10000);
                }}
                >
                {({
                    values,
                    errors,
                    handleChange,
                    /* and other goodies */
                }) => (
                    <form id={props.id} target="_blank" className="p-3">
                        <legend className="pb-2">Complete this form and we'll reach out within 24hours.</legend>
                        <Input 
                            id="email"
                            label="Email"
                            labelClass="mb-1"
                            value={values.email}
                            error={errors.email}
                            placeholder="Your Email Address"
                            type="email"
                            onChange={handleChange}
                            required
                        />
                        <Input 
                            id="orgName"
                            label="Organization Name"
                            labelClass="mb-1"
                            value={values.orgName}
                            error={errors.orgName}
                            placeholder="Library or School Name"
                            type="text"
                            onChange={handleChange}
                            required
                        />
                        <Input 
                            id="name"
                            label="Your Name"
                            labelClass="mb-1"
                            value={values.name}
                            error={errors.name}
                            placeholder="First and Last Name"
                            type="text"
                            onChange={handleChange}
                            required
                        />
                        <Input 
                            id="phone"
                            label="Phone"
                            labelClass="mb-1"
                            value={values.phone}
                            error={errors.phone}
                            placeholder="Best Phone Number to Reach You"
                            onChange={handleChange}
                            type="phone"
                        />
                        <Select 
                            id="orgType"
                            label="Organization Type"
                            labelClass="mb-1"
                            value={values.orgType}
                            onChange={handleChange}
                        >
                            <option value="">---</option>
                            <option value="school"> School</option>
                            <option value="library">Library</option>
                            <option value="government">Government</option>
                            <option value="other">Other</option>
                        </Select>
                        <TextArea 
                            id="notes"
                            labelClass="mb-1"
                            label="Additional Notes"
                            value={values.notes}
                            error={errors.notes}
                            placeholder="What are your interests or questions?"
                            row="8"
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="Notes" class="pb-3 pt-1 notesLabel">Please mention products you are interested in, like preloaded audiobooks, eReaders or tablets.</label>
                        <button class="button-two p-2 m-auto" type='button' onClick={()=>handleClick(values)}>Send</button>
                    </form>
                    )}
            </Formik>
        </div>
    );
};

export default ContactWidget;
