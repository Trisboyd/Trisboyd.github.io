import Input from "../input/input";
import { ContactPic, ContactForm, ContactSection, ContactSubmit, ContactTitle } from "./styledContact";
import pisa from '../../images/pisaPic.jpg';
import { useState, useEffect } from 'react';


const Contact = () => {

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

    const resetInputs = () => {
        setInputs({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    };

    const handleSubmit = (event) => {

    }

    useEffect(() => {
        resetInputs();
    }, []);


    return (
        <ContactSection>
            <ContactPic src={pisa} />
            <ContactForm>
                <ContactTitle>Contact Me</ContactTitle>
                <Input
                    input={true}
                    type='text'
                    columnStart={'1'}
                    columnEnd={'3'}
                    rowStart={'2'}
                    rowEnd={'3'}
                    label={'Name'}
                    name={'name'}
                    placeholder={'name'}
                    value={inputs.name}
                    onChange={handleChange}
                />
                <Input
                    input={true}
                    type='email'
                    columnStart={'1'}
                    columnEnd={'2'}
                    rowStart={'3'}
                    rowEnd={'4'}
                    label={'Email'}
                    placeholder={'email'}
                    marginL={true}
                    name={'email'}
                    value={inputs.email}
                    onChange={handleChange}
                />
                <Input
                    input={true}
                    type='text'
                    columnStart={'2'}
                    columnEnd={'3'}
                    rowStart={'3'}
                    rowEnd={'4'}
                    label={'Phone'}
                    placeholder={'phone'}
                    marginR={true}
                    name={'phone'}
                    value={inputs.phone}
                    onChange={handleChange}
                />
                <Input
                    type='text'
                    columnStart={'1'}
                    columnEnd={'3'}
                    rowStart={'4'}
                    rowEnd={'8'}
                    label={'Message'}
                    height={'80px'}
                    name={'message'}
                    value={inputs.message}
                    onChange={handleChange}
                />
                <ContactSubmit>Submit</ContactSubmit>
            </ContactForm>
        </ContactSection>
    )
}

export default Contact;