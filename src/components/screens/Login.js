import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App'
import M from 'materialize-css'
import wallpaper1 from '../../wallpaper1.jpg'

const Login = () => {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () => {

        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({ type: "USER", payload: data.user })
                    M.toast({ html: "Signed In Success", classes: "#43a047 green darken-1" })
                    history.push('/')
                }
            }).catch(err => {
                console.log(err)
            })

    }
    return (
        <div style={{ backgroundImage: `url(${wallpaper1})`, opacity: "1", height: "750px", padding: "150px" }}>
            <div class="row" style={{ width: "800px" }}>
                <div class="col s12 m7">

                    <div className="card auth-card input-field" style={{ marginLeft: "200px" }}>
                        <h2 style={{ textAlign: "center" }}>Sign In</h2><br />
                        <span style={{ color: "red" }}><strong>*</strong></span>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        /><br />
                        <span style={{ color: "red" }}><strong>*</strong></span>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br /><p><span style={{ color: "red" }}><strong>*</strong></span>marked fields are mandatory</p>
                        <button style={{ color: "white" }}
                            className="btn waves-effect waves-light #1b5e20 green darken-4" type="submit" name="action"
                            onClick={() => PostData()}
                        >
                            Login
                </button><br />
                        <h5 style={{ color: "#1b5e20 green darken-4", textAlign: "center" }}>
                            Don't have an account ?<Link to="/signup">Sign Up</Link>
                        </h5><br />
                        <h6 style={{ color: "#1b5e20 green darken-4", textAlign: "center" }}>
                            <Link to="/reset">Forgot password ?</Link>
                        </h6><br />
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Login