import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import wallpaper1 from '../../wallpaper1.jpg'

const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState(undefined)

    useEffect(() => {
        if (url) {
            uploadFields()
        }
    }, [url])

    const uploadPic = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "yashashvi")
        fetch("	https://api.cloudinary.com/v1_1/yashashvi/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const uploadFields = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                mobile,
                address,
                pic: url
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
    const PostData = () => {
        if (image) {
            uploadPic()
        } else {
            uploadFields()
        }

    }

    return (
        <div style={{ backgroundImage: `url(${wallpaper1})`, opacity: "1", height: "1050px", padding: "80px" }}>
            <div className="mycard" >
                <div className="card auth-card input-field" style={{ marginBottom: "80%" }}>
                    <h2 style={{ textAlign: "center" }}>Sign Up</h2><br />
                    <span style={{ color: "red" }}><strong>*</strong></span>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
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
                    /><br />
                    <span style={{ color: "red" }}><strong>*</strong></span>
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    /><br />
                    <span style={{ color: "red" }}><strong>*</strong></span>
                    <input
                        type="text"
                        placeholder="Full Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    /><br />
                    <div className="file-field input-field" >
                        <div className="btn #1b5e20 green darken-4">
                            <span style={{ color: "white" }}>Upload Pic</span>
                            <input type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div><br />
                    <p><span style={{ color: "red" }}><strong>*</strong></span>marked fields are mandatory</p>
                    <button style={{ color: "white" }}
                        className="btn waves-effect waves-light #1b5e20 green darken-4"
                        onClick={() => PostData()}
                    >
                        Signup
                    </button><br />
                    <h5 style={{ textAlign: "center" }}>
                        Already have an account ?<Link to="/login" >Sign In</Link>
                    </h5>
                    <br />
                </div>
            </div>
        </div>
    );
}
export default Signup