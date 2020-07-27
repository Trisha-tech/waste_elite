import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import unnamed from '../../unnamed.jpg'


const Certificate = () => {

    return (
        <div>
        <div class="certificate" style={{ width: "100%",
            height:"400px",color:"white", padding:"150px",
            backgroundImage: `url(${unnamed})`}}>
            <h1 style={{ fontSize: "58px",textAlign:"center" }}>Tree Plantation</h1>
        </div>
        <div class="row" style={{marginTop: "100px",marginRight:"30px",marginLeft:"30px"}}>
        <div class="col-lg-6 col-xl-6" style={{width:"700px"}}>
        <img style={{width:"700px"}}
        src={process.env.PUBLIC_URL+"/images/certificate.jpg"} alt="certificate of apperciation" class="img-fluid" />
        This is a Sample Certificate
        </div>    
        <div class="col-lg-6 col-xl-6">
        <p style={{fontSize: "20px"}}>We offer free Tree Plantation Service  as well as Certificates to  our clients who are working with us for more than three months. The benefits of planting trees are not only impacting environment and reduce pollution but it impact on Public Health and Social Benefits. Trees produce oxygen, intercept airborne particulates, and reduce smog, enhancing a community’s respiratory health.
        
            Trees play a key role in climate change mitigation, we all know that we are experiencing a period of warming due to the greenhouse gases building up in the atmosphere, trapping in more energy than is radiating back out to space.
           <br/><br/> <h3 style={{color:"green",textAlign:"center"}}>"A Person who feels Appreciated will always do More than what is Expected."</h3>
            </p>
           
        </div>
        </div><br/><br/>
        <div style={{backgroundColor:"#1b5e20 ",color: "white",width:"100%"}}><br/><br/>
        <h1 style={{textAlign:"center"}} >Tree plantation Service includes:</h1><br/>
        <p style={{marginLeft:"300px"}}>
         <ol>
        <li style={{fontSize: "18px"}}>
            We will final the location where we plant Trees on behalf of clients.
        </li><br/>
        <li  style={{fontSize: "18px"}}>
            We will arrange all sapling as per requirement by clients.
        </li><br/>
        <li  style={{fontSize: "18px"}}>
            We will arrange all other resources like Labour for Diging & Plantation, Water and Manure.
    
        </li><br/>
        <li  style={{fontSize: "18px"}}>
            Take care of plant for a fixed period of time so that survival rate of Trees should be higher.
        </li><br/>
        <li  style={{fontSize: "18px"}}>
            We provide Tree Plantation Certificate to clients for their green initiative.
        </li><br/><br/>
         </ol>   
        </p>
        </div>
       
        <div class="row" style={{marginTop:"45px",marginLeft:"15px",marginRight:"15px"}}>
        <div class="col-xl-4 col-lg-4">
        <img src={process.env.PUBLIC_URL+"/images/plant1.jpg"} alt="plant1" class="img-fluid" />    
        </div>   
        <div class="col-xl-4 col-lg-4">
            <img  style={{height:"285px"}} src={process.env.PUBLIC_URL+"/images/plant2.jpg"} alt="plant2" class="img-fluid" />
        </div>
        <div class="col-xl-4 col-lg-4">
        <img  style={{height:"285px"}} src={process.env.PUBLIC_URL+"/images/plant3.jpg"} alt="plant3" class="img-fluid" />
        </div>
        </div>
        
            
        </div>

    );


}
export default Certificate



