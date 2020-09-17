import React, { useState } from 'react'
import Layout from '../components/Layout'
import {Button} from 'baseui/button'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import {Input} from 'baseui/input';
import { Textarea } from "baseui/textarea";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    return (
        <Layout page="Contact Us">
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <form action="">
                            <div className="my-4">
                                <Input 
                                    name="name" 
                                    value={name} 
                                    onChange={e=>onChange(e)} 
                                    type="text" 
                                    placeholder="Your Name"
                                    clearable
                                    clearOnEscape
                                    />
                            </div>
                            <div className="my-4">
                                <Input 
                                    name="email" 
                                    value={email} 
                                    onChange={e=>onChange(e)} 
                                    type="email" 
                                    placeholder="Your Email"
                                    clearable
                                    clearOnEscape
                                />
                            </div>
                            <div className="my-4">
                                <Input name="subject" 
                                    value={subject} 
                                    onChange={e=>onChange(e)} 
                                    type="text" 
                                    placeholder="Your Subject"
                                    clearable
                                    clearOnEscape
                                />
                            </div>
                            <div className="my-4">
                                <Textarea
                                    value={message}
                                    name="message"
                                    onChange={e=>onChange(e)}
                                    placeholder="Your Message"
                                    clearable
                                    clearOnEscape
                                />
                            </div>
                            <div className="my-4">
                                <Button type="submit">Send Message</Button> 
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default ContactPage
