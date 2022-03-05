import Input from "../input/input";
import { ContactPic, ContactForm, ContactSection, ContactSubmit, ContactTitle } from "./styledContact";
import pisa from '../../images/pisaPic.jpg';

const Contact = () => {

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
                    label={'Full Name *'}
                    placeholder={'name'}
                />
                <Input
                    input={true}
                    type='email'
                    columnStart={'1'}
                    columnEnd={'2'}
                    rowStart={'3'}
                    rowEnd={'4'}
                    label={'Email *'}
                    placeholder={'email'}
                    marginL={true}
                />
                <Input
                    input={true}
                    type='text'
                    columnStart={'2'}
                    columnEnd={'3'}
                    rowStart={'3'}
                    rowEnd={'4'}
                    label={'Phone *'}
                    placeholder={'phone'}
                    marginR={true}
                />
                <Input
                    type='text'
                    columnStart={'1'}
                    columnEnd={'3'}
                    rowStart={'4'}
                    rowEnd={'8'}
                    label={'Message'}
                    height={'80px'}
                />
                <ContactSubmit>Submit</ContactSubmit>
            </ContactForm>
        </ContactSection>
    )
}

export default Contact;