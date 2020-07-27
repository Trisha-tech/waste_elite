
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App'
import M from 'materialize-css'
import $ from 'jquery'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Home = () => {
    const [data, setData] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [text, setText] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems);
    });


    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });


    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });


    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid email", classes: "#c62828 red darken-3" })
            return
        }
        fetch("/", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
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
        <div>


            <div class="slider" style={{ marginTop: "63px", zIndex: "-1000" }} >
                <ul class="slides" >
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/1" />
                        <div class="caption center-align" >
                            <h3> There is no such things as "Away" <br />
                            When we throw Anything Away, it must Go Somewhere</h3>

                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/2" />
                        <div class="caption left-align">
                            <h3>We are Living on this Planet <br />as if we had Another One to go to</h3>

                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/3" />
                        <div class="caption right-align">
                            <h3>Create a World where the Environment<br /> doesn't need Protection</h3>

                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/4" />
                        <div class="caption center-align">
                            <h3>Time Spent among Trees is never Time Wasted</h3>

                        </div>
                    </li>
                </ul>
            </div>


            <div>
                <h1 style={{ marginLeft: "40%", marginTop: "5%", color: "#1b5e20" }}><strong>Our Sevices</strong></h1><br />
                <div className="sec1">


                    <div className="sevices" style={{ marginLeft: "5%", marginBottom: "10%" }}>

                        <div className="C1">
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/collect.png"} style={{ width: "80%" }} />
                            </div>
                            <div>
                                <h3 style={{ color: "green" }}>Collection</h3>
                                <h5>We offer reliable trash and recycling pickup services for the waste everyday life creates.</h5>
                                <h5>We collect the wastes directly from your home with no cost.</h5>
                            </div>

                        </div>
                        <div className="C2">
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/truck.png"} style={{ width: "80%" }} />
                            </div>
                            <div>
                                <h3 style={{ color: "green" }}>Transportation</h3>
                                <h5>Collected wastes from your home, it will send to the recycling industries/companies.</h5>
                                <h5>They will recycle thes wastes by their recycling techniques.</h5>

                            </div>

                        </div>
                        <div className="C3">
                            <div>
                                <img src={process.env.PUBLIC_URL + "/images/bio.png"} style={{ width: "80%" }} />
                            </div>
                            <div style={{ marginLeft: "20px" }}>
                                <h3 style={{ color: "green" }}>Biogas Plant Set-Up</h3>
                                <h5>"The machine that converts your waste into clean energy!"</h5>
                                <h5>Bacteria naturally breakdown the organic matter into two oustanding by-products: Cooking Gas and Fertilizer. </h5>

                            </div>

                        </div>
                    </div>

                    <div className="video" >
                        <div class="row">
                            <div class="col s12 m7">
                                <div class="card" style={{ transform: "translateY(30px)" }}>
                                    <div class="card-image">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/La6yXYwVq3A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div class="parallax-container">
                <div class="parallax"><img src={process.env.PUBLIC_URL + "/images/collection.jpeg"} /></div>
            </div>
            <div className="about2"><br />
                <h3 style={{ marginLeft: "40%", marginTop: "7%", color: "#1b5e20", fontSize: "40px" }}>ABOUT US</h3><br /><br />
                <div className="sec5">
                    <div className="para1" style={{ marginLeft: "10%", marginRight: "5%", fontSize: "20px" }}>
                        <p>WasteElite one of the leading provider of Eco-friendly and dependable Door-to-Door
               collection services to households all across Delhi/NCR.</p>
                        <p>We believe in reaching out at the grass-root levels to tackle the problem of wastes
                        and have developed superior Door-to-Door waste collection services to provide ease
               and convenience to our customers.</p>
                        <p>It's not just your daily kitchen waste, but we also help you to get rid of your
               household, horticulture, construction generated waste in the most eco-friendly manner.</p>
                    </div>
                    <div className="para2" style={{ marginLeft: "10%", marginRight: "5%" }}>

                        <div style={{ width: "250px", height: "250px", borderRadius: "50%", backgroundColor: "green" }}>
                            <img style={{ marginLeft: "10%", marginTop: "5%" }} src={require("../../logo4.png")} />
                        </div>
                    </div>
                </div>
                <br />
                <h1 style={{ color: "green", textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>"Eliminate the concept of Waste-
               <br />  Not reduce, minimize or avoid waste.....<br />But eliminate the very concept by
                  Design."</h1>
                <br /><br /> </div>

            <div class="parallax-container">
                <div class="parallax"><img src={process.env.PUBLIC_URL + "/images/modi.jpeg"} /></div>
            </div>

            <div className="card">
                <h3 style={{ marginLeft: "45%", fontSize: "40px", color: "#1b5e20", marginTop: "7%" }}>Our Team</h3>
                <br /><br />
                <div className="team">
                    <div class="row" style={{ width: "500px", marginRight: "50px" }}>
                        <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img style={{ width: "100px", height: "100px", borderRadius: "50px", marginLeft: "38%", marginTop: "5%" }}
                                        src={process.env.PUBLIC_URL + "/images/sachi1.jpeg"} />

                                </div>
                                <div class="card-content">
                                    <h3 style={{ marginLeft: "25%" }}>Sachi Saraswat</h3>
                                    <h5>Executive Vice President and Chief Operating Officer</h5>
                                    <p>As executive vice president and chief operating officer
                                    (COO) for Waste Elite, Sachi Saraswat has responsibility
                                    for all field operations, including oversight of collections,
                                       disposal and landfills. </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row" style={{ width: "500px", marginRight: "50px" }}>
                        <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img style={{ width: "100px", height: "100px", borderRadius: "50px", marginLeft: "38%", marginTop: "5%" }}
                                        src={process.env.PUBLIC_URL + "/images/trisha1.jpg"}
                                    />
                                </div>
                                <div class="card-content">
                                    <h3 style={{ marginLeft: "30%" }}>Trisha Sahu</h3>
                                    <h5>President and Chief Executive Officer</h5>
                                    <p>Trisha Sahu is president and chief executive
                                    officer for Waste Elite. She is also a member of the
                                     Board of Directors. </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row" style={{ width: "500px" }}>
                        <div class="col s12 m7">
                            <div class="card">
                                <div class="card-image">
                                    <img style={{ width: "100px", height: "100px", borderRadius: "50px", marginLeft: "38%", marginTop: "5%" }}
                                        src={process.env.PUBLIC_URL + "/images/varsha.jpeg"} />
                                </div>
                                <div class="card-content">
                                    <h3 style={{ marginLeft: "25%" }}>Varsha Kumari</h3>
                                    <h5>Senior Vice President, Operations</h5>
                                    <p>As senior vice president of field operations, Varsha
                                    Kumari is responsible for oversight of
                                     collection, disposal and landfills. </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div><br />
            </div>



            <div className="sec4">
                <br /> <br />
                <h3 style={{ marginLeft: "30%", color: "#1b5e20", fontSize: "40px" }}>OUR SUPPORTING COMPANIES</h3>
                <br />
                <div className="company1">
                    <div className="card" style={{ marginRight: "5%" }}>
                        <img src={process.env.PUBLIC_URL + "/images/shayna.jpg"} />
                    </div>
                    <div className="card" style={{ marginRight: "5%", height: "50px" }}>
                        <img src={process.env.PUBLIC_URL + "/images/greenotech.jpg"} />
                    </div>
                    <div className="card" style={{ marginRight: "5%", height: "100px" }}>
                        <img src={process.env.PUBLIC_URL + "/images/vanshika.png"} />
                    </div>

                    <div className="card" style={{ height: "67%" }}>
                        <img src={process.env.PUBLIC_URL + "/images/atterologo.jpg"} />
                    </div>
                </div>
                <br /><br /> <br /> <br /> <br /> <br />
            </div>

            <div class="parallax-container">
                <div class="parallax"><img src={process.env.PUBLIC_URL + "/images/water.jpg"} /></div>
            </div>

            <div className="card">
                <h3 style={{ marginLeft: "40%", marginBottom: "5%", marginTop: "7%", color: "#1b5e20", fontSize: "40px" }}>LATEST NEWS</h3>
                <div className="sec3">


                    <a href="https://timesofindia.indiatimes.com/india/framework-to-make-producers-manage-plastic-waste-is-out/articleshow/76635067.cms">
                        <div class="row" style={{ width: "250px", marginRight: "15px", marginLeft: "10px" }}>
                            <div class="col s12 m7">
                                <div class="card hoverable">
                                    <div class="card-image">
                                        <img src={process.env.PUBLIC_URL + "/images/news1.jpeg"} />

                                    </div>
                                    <div class="card-content">
                                        <p><strong>Framework to make<br /> producers manage<br /> plastic is out </strong></p>
                                        <p>Vishwa Mohan | TNN | Updated: Jun 26, 2020, 09:57 IST</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://timesofindia.indiatimes.com/india/framework-to-make-producers-manage-plastic-waste-is-out/articleshow/76635067.cms">
                                            Click to see</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.deccanherald.com/city/top-bengaluru-stories/plastic-waste-pile-up-across-bengaluru-triggers-dengue-spike-fears-853426.html">
                        <div class="row" style={{ width: "250px", marginRight: "15px" }}>
                            <div class="col s12 m7">
                                <div class="card hoverable">
                                    <div class="card-image">
                                        <img src={process.env.PUBLIC_URL + "/images/news2.jpg"} />

                                    </div>
                                    <div class="card-content">
                                        <p><strong>Plastic waste pile-up across Bengaluru triggers dengue spike fears
</strong></p>
                                        <p>Rasheed Kappan, DHNS, Bengaluru, JUN 25 2020, 01:04 IST</p>

                                    </div>
                                    <div class="card-action">
                                        <a href="https://www.deccanherald.com/city/top-bengaluru-stories/plastic-waste-pile-up-across-bengaluru-triggers-dengue-spike-fears-853426.html">Click to see</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.hindustantimes.com/india-news/india-stares-at-biomedical-waste-crisis/story-SpPZrA1tutAAuYhE57p7UI.html">
                        <div class="row" style={{ width: "250px", marginRight: "15px" }}>
                            <div class="col s12 m7">
                                <div class="card hoverable">
                                    <div class="card-image">
                                        <img src={process.env.PUBLIC_URL + "/images/news3.jpeg"} />

                                    </div>
                                    <div class="card-content">
                                        <p><strong>India stares at biomedical waste crisis</strong></p>
                                        <p>Hindustan Times, New Delhi/Mumbai Jun 23, 2020 21:36 IST</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://www.hindustantimes.com/india-news/india-stares-at-biomedical-waste-crisis/story-SpPZrA1tutAAuYhE57p7UI.html">Click to see</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.cbc.ca/news/canada/thunder-bay/thunder-bay-recycling-expansion-1.5625821">
                        <div class="row" style={{ width: "250px", marginRight: "15px" }}>
                            <div class="col s12 m7">
                                <div class="card hoverable">
                                    <div class="card-image">
                                        <img src={process.env.PUBLIC_URL + "/images/news4.jpeg"} />

                                    </div>
                                    <div class="card-content">
                                        <p><strong>City of Thunder Bay expanding recycling program

</strong></p><br />
                                        <p>CBC News · Posted: Jun 25, 2020 6:30 AM ET | Last Updated: June 25</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://www.cbc.ca/news/canada/thunder-bay/thunder-bay-recycling-expansion-1.5625821">Click to see</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.telegraphindia.com/calcutta/no-clearance-of-garbage-of-coronavirus-infected-families/cid/1783758">
                        <div class="row" style={{ width: "250px" }}>
                            <div class="col s12 m7">
                                <div class="card hoverable">
                                    <div class="card-image">
                                        <img src={process.env.PUBLIC_URL + "/images/news5.jpeg"} />

                                    </div>
                                    <div class="card-content">
                                        <p><strong>No clearance of garbage of infected families</strong></p>
                                        <p>By Snehal Sengupta
    Published 26.06.20, 1:02 AM</p>
                                    </div>
                                    <div class="card-action">
                                        <a href="https://www.telegraphindia.com/calcutta/no-clearance-of-garbage-of-coronavirus-infected-families/cid/1783758">Click to see</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="sec2">

                <div className="suggestion">
                    <h3 style={{ marginLeft: "17%", color: "#1b5e20", marginTop: "7%", fontSize: "35px" }}>Give your suggestions</h3><br />
                    <table>
                        <tr>
                            <td>
                                <div>
                                    <form class="col s12">
                                        <div className="suggest">
                                            <div class="input-field col s6">
                                                <i class="material-icons prefix" style={{ backgroundColor: "white", color: "#1b5e20" }}>account_circle</i>
                                                <input id="icon_prefix" type="text" class="validate"
                                                    placeholder="Full Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                                <label for="icon_prefix" style={{ backgroundColor: "white", color: "#1b5e20" }}>Your Name</label>
                                            </div><br />
                                            <div class="input-field col s6">
                                                <i class="material-icons prefix" style={{ backgroundColor: "white", color: "#1b5e20" }}>email</i>
                                                <input id="icon_telephone" class="validate"
                                                    type="text"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)} />
                                                <label for="icon_telephone" style={{ backgroundColor: "white", color: "#1b5e20" }}>Your Email</label>
                                            </div><br />


                                        </div>
                                        <br />
                                        <FormGroup row>
                                            <Label for="exampleText" sm={2}>Your Suggestion</Label>
                                            <Col sm={10}>
                                                <Input style={{
                                                    border: " 2px solid #1b5e20",
                                                    boxShadow: "0 1px 0 0 #1b5e20"
                                                }}
                                                    type="textarea" name="text" id="exampleText"
                                                    placeholder="Write Your Suggestion"
                                                    value={text}
                                                    onChange={(e) => setText(e.target.value)} />
                                            </Col>
                                        </FormGroup><br />
                                        <button
                                            class="btn waves-effect waves-light" type="submit" name="action" style={{ marginLeft: "20%", color: "white", marginBottom: "10%", width: "50%", backgroundColor: "#1b5e20" }}
                                            onClick={() => PostData()}
                                        >Submit Your Suggestion
                                     <i class="material-icons right" style={{ color: "white" }}>send</i>
                                        </button><br />

                                    </form>
                                </div>





                            </td>
                            <td>
                                <div class="row">
                                    <div class="col s12 m7">
                                        <div class="card hoverable" style={{ marginLeft: "20%", width: "350px" }}>
                                            <div class="card-image">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.213158464005!2d75.96860606515054!3d31.518304981370296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae3c77ed7b187%3A0x7e1e97621f579c17!2sPanjab%20University%20Swami%20Sarvanand%20Giri%20Regional%20Centre!5e0!3m2!1sen!2sin!4v1593808939392!5m2!1sen!2sin"
                                                    width="350" height="350" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>



                </div>
            </div>

        </div>
    );
}
export default Home

