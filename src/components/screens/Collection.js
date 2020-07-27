import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import collection from '../../collection.jpg'


const Collection = () => {

    return (
        <div>
            <div>
                <div >

                    <div className="collection" style={{ backgroundImage: `url(${collection})`, marginTop: "62px" }}>
                        <h1 style={{ fontSize: "65px" }}>Waste Collection</h1>
                    </div>
                </div>
                <div style={{ marginTop: "100px" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-xl-8">
                                <img src={process.env.PUBLIC_URL + "/images/dustbins.jpg"} alt="dustbins" className="img-fluid" />
                            </div>
                            <div className="col-lg-4 col-xl-4" style={{ fontsize: "40px", fontFamily: "'Roboto', sans-serif " }}>
                                <p >Waste Collection and Segregation is the most important
                                step for the waste treatment. Diverse Waste materials require
                                different ways of treatment; Mixed Waste cannot be treated. As
                                waste is segregated as Plastic, Paper , Metal and Glass waste,
                                these different categories of waste can be treated accordingly.
                                  <br /><br />Segregation makes the recycling of the waste easier.
                                   Effective segregation of wastes means that less waste goes to
                                   landfill which makes it cheaper and better for people and the
                                   environment. Segregated Waste is also often cheaper to dispose of
                                   because it does not require as much manual or mechanical sorting
                                   as mixed waste.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ marginTop: "28px", fontsize: "40px" }}>
                    <div className="row">
                        <div className="col-lg-8 col-xl-8" style={{ padding: "26px", fontFamily: "'Roboto', sans-serif " }}>
                            <p><strong>All of us are familiar with the dustbin and household waste management. However,
                            have we ever given a thought, what happens to the household waste that is thrown out of
                            our houses every day?  If we think of garbage disposal, we will realize it gets loaded on
                            municipal trucks and is dumped on landfills in city outskirts regularly. Beyond this, most
                            of us would rarely bother about it, like what is going to happen to it after the dumping? Is
                            it going to be treated? What would be the condition of villages in such dump zones? Does it
                               have any effect on the people living nearby?</strong></p>

                            <br />
                            <h1 style={{ color: "green", fontsize: "50px" }}>A smart way to get rid of household Waste</h1>
                            <ol >
                                <li style={{ fontsize: "20px", fontFamily: "'Roboto', sans-serif " }}>Create your account on our Website</li><br />
                                <li>After Successful registration, we will contact you for verification.</li><br />
                                <li>We will provide 4 different dustbins in your locality, these dustbins are labelled as Plastic, Glass, Metal and Paper and having colour Blue, Green ,Red and Yellow respectively. </li><br />
                                <li>You have to put the household waste in different dustbins based on the type of waste. </li><br />
                                <li>We will visit in your locality weekly for collecting the waste and you can also inform us when the dustbins get filled.</li>
                            </ol>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <img src={process.env.PUBLIC_URL + "/images/whatwedo.jpg"} alt="what we do" className="img-fluid" />
                            <img style={{ width: "80%", marginTop: "20px", marginLeft: "40px" }}
                                src={process.env.PUBLIC_URL + "/images/c.png"} alt="what we do" className="img-fluid" />

                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <h1 style={{ textAlign: "center", fontSize: "45px", color: "green" }}>Types Of Waste We Collect</h1>
                <br />   <div className="row" style={{ marginLeft: "65px", padding: "18px" }}>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="card" style={{ width: "450px" }}>
                            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/plastic.jpg"} alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}><strong>Plastic Waste</strong></h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-md-6 col-lg-6">
                        <div className="card" style={{ width: "450px" }}>
                            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/paperwaste.jpg"} alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}><strong>Paper Waste</strong></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "65px", padding: "30px" }}>
                    <div className="col-lg-6 col-xl-6">
                        <div className="card" style={{ width: "450px" }}>
                            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/metalwaste.jpg"} alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}><strong>Metal Waste</strong> </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="card" style={{ width: "450px", marginLeft: "40px" }}>
                            <img className="card-img-top" src={process.env.PUBLIC_URL + "/images/glasswaste2.jpg"} alt="Card image" className="img-fluid" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}><strong>Glass Waste</strong> </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="quote">
                    <br />
                    <div>
                        <h1><span style={{ fontsize: "50px" }}></span>Don't Litter, it Makes the World Bitter<span style={{ fontSize: "50px" }}></span></h1>
                    </div><br />
                    <div style={{ marginTop: "10px" }}><h1><span style={{ fontsize: " 50px" }}></span>Recycle each and every day instead of throwing Garbage Away<span style={{ fontSize: "50px" }}></span></h1>
                    </div>
                </div><br /><br />
                <h1 style={{ fontSize: "45px", color: "green", textAlign: "center" }}>Waste collection Services</h1>
                <br /> <div style={{ marginTop: "55px" }}>
                    <div className="row" style={{ marginLeft: "10px", marginRight: "30px" }}>
                        <div className="col-lg-6 col-xl-6" >
                            <img style={{ height: "63%" }} src={process.env.PUBLIC_URL + "/images/collection2.png"} className="img-fluid " alt="collection Services" />
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <img src={process.env.PUBLIC_URL + "/images/collection3.png"} className="img-fluid " style={{ position: "absolute", float: "left" }} alt="collection Services" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );


}
export default Collection



