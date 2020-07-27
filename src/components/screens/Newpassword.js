import React, { useState, useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import M from 'materialize-css'
import wallpaper2 from '../../wallpaper2.jpg'

const NewPassword = () => {
    const history = useHistory()
    const [password, setPassword] = useState("")
    const { token } = useParams()
    console.log(token)
    const PostData = () => {

        fetch("/new-password", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                token
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: data.message, classes: "#43a047 green darken-1" })
                    history.push('/signin')
                }
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div style={{ backgroundImage: `url(${wallpaper2})`, opacity: "1", height: "600px", padding: "200px" }}>

            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2 style={{ textAlign: "center" }}>New Password</h2><br />
                    <input
                        type="password"
                        placeholder="Enter a new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />
                    <button style={{ color: "white" }}
                        className="btn waves-effect waves-light #1b5e20 green darken-4"
                        onClick={() => PostData()}
                    >
                        Update password
                </button>
                    <br />
                </div>
            </div>
        </div>
    );
}
export default NewPassword