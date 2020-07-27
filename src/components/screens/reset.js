import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import wallpaper2 from '../../wallpaper2.jpg'

const Reset = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const PostData = () => {

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/reset-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })
                    history.push('/login')
                }
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div style={{ backgroundImage: `url(${wallpaper2})`, opacity: "1", height: "600px", padding: "200px" }}>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2 style={{ textAlign: "center" }}>Reset Password</h2><br />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <button style={{ color: "white" }} className="btn waves-effect waves-light #1b5e20 green darken-4" type="submit" name="action"
                        onClick={() => PostData()}
                    >
                        Reset Password
                </button>
                    <br />
                </div>
            </div>
        </div>
    );
}
export default Reset