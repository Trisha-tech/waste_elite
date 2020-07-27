import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import wallpaper1 from '../../wallpaper1.jpg'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactUs = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [text, setText] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/contact", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                mobile,
                text
            })
        }).then(res => res.json())
            .then(data => {

                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })

                }
            }).catch(err => {
                console.log(err)
            })


    }


    return (
        <div style={{ backgroundImage: `url(${wallpaper1})`, opacity: "1", height: "1050px", padding: "100px" }}>
            <div className="mycard" >
                <div className="card auth-card input-field">
                    <h2 style={{ textAlign: "center" }}>Contact Us</h2><br />
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <br />
                    <FormGroup row>
                        <Label for="exampleText" sm={2}>Your Message</Label>
                        <Col sm={10}>
                            <Input style={{
                                border: " 2px solid #1b5e20",
                                boxShadow: "0 1px 0 0 #1b5e20"
                            }}
                                type="textarea" name="text" id="exampleText"
                                placeholder="Type your message"
                                value={text}
                                onChange={(e) => setText(e.target.value)} />
                        </Col>
                    </FormGroup>
                    <br />
                    <button className="btn waves-effect waves-light #1b5e20 green darken-4"
                        onClick={() => PostData()}
                    >
                        Submit
                </button>
                    <br />
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ color: "white" }}>
                    <h1 ><u>Address:</u></h1>
                    <p>WasteElite Private Limited</p>
                    <p>Swami Sarvanand Giri Regional Centre, Punjab University</p>
                    <p>Bajwara-Una Road, Hoshiarpur, Bajwara, Hoshiarpur, Punjab, India</p>
                    <p><strong>Contact Number:</strong> 8887737691, 8920067088, 9798852367</p>
                </div>
                <div style={{ marginLeft: "100px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.213158464005!2d75.96860606515054!3d31.518304981370296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae3c77ed7b187%3A0x7e1e97621f579c17!2sPanjab%20University%20Swami%20Sarvanand%20Giri%20Regional%20Centre!5e0!3m2!1sen!2sin!4v1593808939392!5m2!1sen!2sin"
                        width="500" height="250" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    );
}
export default ContactUs



