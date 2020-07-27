import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import wallpaper1 from '../../wallpaper1.jpg'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Suggestion = () => {
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
        <div style={{ backgroundImage: `url(${wallpaper1})`, opacity: "1", height: "800px", padding: "150px" }}>
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
                        <Label for="exampleText" sm={2}>Your Suggestion</Label>
                        <Col sm={10}>
                            <Input type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                    <br />
                    <button className="btn waves-effect waves-light #64b5f6 blue darken-2"
                        onClick={() => PostData()}
                    >
                        Submit
                </button>
                    <br />
                </div>
            </div>
        </div>
    );
}
export default Suggestion



