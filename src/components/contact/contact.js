import Input from "../input/input";
import {
    ContactPic,
    ContactForm,
    ContactSection,
    ContactSubmit,
    ContactTitle,
    Thanks,
    Iframe
}
    from "./styledContact";
import pisa from '../../images/pisaPic.jpg';
import { useState, useEffect, useRef } from 'react';


const Contact = () => {

    const formRef = useRef();

    const [valid, setValid] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const checkFormValidity = () => {
        setValid(formRef.current.checkValidity())
    }

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setInputs({
            ...inputs,
            [id]: value
        });
    }

    const resetInputs = () => {
        setInputs({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    };

    useEffect(() => {
        resetInputs();
    }, []);

    const formName = 'entry.90517467';

    const formEmail = 'entry.1056814574';

    const formMessage = 'entry.2057609694';

    const formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfupqKSW-7BCZcuiIXtQayi47-vl8UKgvQgVihOuHA6yAa1rA/formResponse';

    const submitForm = (event) => {
        const formData = {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'entry.90517467': inputs.name,
                'entry.1056814574': inputs.email,
                'entry.2057609694': inputs.message
            })
        }
        return fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSfupqKSW-7BCZcuiIXtQayi47-vl8UKgvQgVihOuHA6yAa1rA/formResponse', formData)
            .then(res => setSubmitted(true))
    }

    let submittedForm = false;
    let hiddenFrameLoaded = false;

    function handleHiddenFrameLoaded() {
        if (hiddenFrameLoaded) {
            submittedForm = true;
        } else {
            hiddenFrameLoaded = true;
        }
    }

    return (
        <ContactSection id='contact'>
            <ContactPic src={pisa} />
            <Iframe
                title='hidden_iframe'
                name='hidden_iframe'
                id='hidden_iframe'
                onload={handleHiddenFrameLoaded} />
            {submitted ?
                <Thanks>Thank you! Tristan will reach out to you shortly</Thanks>
                :
                <ContactForm
                    ref={formRef}
                    onChange={checkFormValidity}
                    target='hidden_iframe'
                    action={formURL}
                    method='POST'
                    onSubmit={submitForm}
                >
                    <ContactTitle>Contact Me</ContactTitle>
                    <Input
                        required
                        input={true}
                        type='text'
                        label={'Name'}
                        id='name'
                        name={formName}
                        placeholder={'name'}
                        value={inputs.name}
                        onChange={handleChange}
                    />
                    <Input
                        required
                        input={true}
                        type='email'
                        label={'Email'}
                        placeholder={'email'}
                        id='email'
                        name={formEmail}
                        value={inputs.email}
                        onChange={handleChange}
                    />
                    <Input
                        required
                        type='text'
                        label={'Message'}
                        height={'80px'}
                        name={formMessage}
                        id='message'
                        value={inputs.message}
                        onChange={handleChange}
                    />
                    <ContactSubmit
                        $valid={valid}
                    >Submit</ContactSubmit>
                </ContactForm>
            }
        </ContactSection>
    )
}

export default Contact;