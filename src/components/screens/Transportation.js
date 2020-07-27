import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import background2 from '../../background2.jpg'


const Transportation = () => {


    return (
        <div>
            <diV className="transport" style={{ backgroundImage: `url(${background2})` }}>
                <h1 style={{ textAlign: "center", fontSize: "65px" }}>Transportation</h1>
            </diV>
            <div className="row" style={{ marginLeft: "30px", marginRight: "30px" }}>
                <div className="col-lg-4 col-xl-4">
                    <img src={process.env.PUBLIC_URL + "/images/transport.jpg"} className="img-fluid hoverable" alt="transport" />
                    <img style={{ marginTop: "20px" }} src={process.env.PUBLIC_URL + "/images/curbside.png"} className="img-fluid hoverable" alt="transport" />
                </div>
                <div className="col-lg-4 col-xl-4">
                    <img src={process.env.PUBLIC_URL + "/images/transport1.jpg"} className="img-fluid hoverable" alt="transport" />
                    <img style={{ marginTop: "20px" }} src={process.env.PUBLIC_URL + "/images/transport3.png"} className="img-fluid hoverable" alt="transport" />

                </div>
                <div className="col-lg-4 col-xl-4">
                    <h1 style={{ color: "green", fontFamily: "italic" }}><span>"</span> Don't Throw Away,Recycle for Another Day<span>"</span></h1>
                    <p style={{ fontSize: "25px" }}>After collecting the waste ,it is segregated in our stores.The Segregated Waste are transported to different industries depending on the recycling methods they use on that particular waste. In this way ,we ensure complete eco-friendly disposal of collected waste. </p>
                    <h1 style={{ color: "green", fontFamily: "italic" }}><span>"</span> Waste isn't Waste untill We Waste it<span>"</span></h1>
                </div>  <br />
                <h1 style={{ color: "green", fontSize: "55px", textAlign: "center", marginLeft: "80px", marginRight: "80px", marginTop: "35px" }}><span>"</span> The Greatest Threat to our planet is the belief that someone else will save it<span>"</span></h1>

            </div>
            <div style={{ margin: "65px" }}>
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <h1 style={{ color: "green" }}>Benefits Of Waste Management</h1>
                        <ol style={{ fontSize: "23px" }}>
                            <li>Improve the Economic Efficiency</li>
                            <li>New Source For Employment</li>
                            <li>Develop Poorer Cities and Countries</li>
                            <li>Minimize Resource Extractions</li>
                            <li>Provide better and fair life for future generation</li>
                        </ol><br />
                        <h1 style={{ color: "green" }}>Benefits you can Expect from your New Lifestyle</h1>
                        <ol style={{ fontSize: "23px" }}>
                            <li>Less harm to the environment</li>
                            <li>Saving money</li>
                            <li>Pure environment</li>
                        </ol>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <img src={process.env.PUBLIC_URL + "/images/banner5.jpeg"} alt="banner5" className="img-fluid" />

                    </div>

                </div>
            </div>

        </div>

    );


}
export default Transportation







