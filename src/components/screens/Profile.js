import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'


const Profile = () => {
    const [mypics, setPics] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
            })
    }, [])

    useEffect(() => {
        if (image) {
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
                    console.log(data)

                    fetch('/updatepic', {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("jwt")
                        },
                        body: JSON.stringify({
                            pic: data.url
                        })
                    }).then(res => res.json())
                        .then(result => {
                            console.log(result)
                            localStorage.setItem("user", JSON.stringify({ ...state, pic: result.pic }))
                            dispatch({ type: "UPDATEPIC", payload: result.pic })
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [image])
    const updatePhoto = (file) => {
        setImage(file)

    }
    return (
        <div style={{ maxWidth: "950px", marginTop: "150px", marginLeft: "200px" }}>
            <h1 style={{ textAlign: "center", margin: "50px", color: "#1b5e20" }}>My Profile</h1>
            <div style={{

                margin: "18px 0px ",

                borderBottom: "1px solid grey"
            }}>
                <div style={{
                    display: "flex",

                    justifyContent: "space-around",

                }}>
                    <div>
                        <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                            src={state ? state.pic : "loading"}
                        />
                    </div>
                    <div className="file-field input-field" style={{ marginTop: "170px", marginLeft: "-180px", color: "green" }}>
                        <div className="btn #1b5e20 green darken-4" style={{ width: "50%" }}>
                            <span style={{ color: "white", fontSize: "18px" }}>Update Pic</span>
                            <input type="file"
                                onChange={(e) => updatePhoto(e.target.files[0])}
                            />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                    <div>



                        <h3 style={{ color: "green" }}>Your Name</h3>
                        <div style={{ width: "600px", borderRadius: "10px", height: "50px", backgroundColor: "#E0FFFF", padding: "20px" }}>

                            <h4>{state ? state.name : "loading"}</h4>
                        </div><br />
                        <h3 style={{ color: "green" }}>Your Email</h3>
                        <div style={{ width: "600px", borderRadius: "10px", height: "50px", backgroundColor: "#E0FFFF", padding: "20px" }}>

                            <h4>{state ? state.email : "loading"}</h4>
                        </div><br />
                        <h3 style={{ color: "green" }}>Your Mobile Number</h3>
                        <div style={{ width: "600px", borderRadius: "10px", height: "50px", backgroundColor: "#E0FFFF", padding: "20px" }}>

                            <h4>{state ? state.mobile : "loading"}</h4>
                        </div><br />
                        <h3 style={{ color: "green" }}>Your Address</h3>
                        <div style={{ marginBottom: "100px", width: "600px", borderRadius: "10px", height: "50px", backgroundColor: "#E0FFFF", padding: "20px" }}>

                            <h4>{state ? state.address : "loading"}</h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Profile