import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'



const EWaste = () => {
    
    return (
       <div>
       <div style={{marginTop:"62px"}}>
       <img src={process.env.PUBLIC_URL+"/images/e-waste-banner.jpg"} alt="e-waste banner" className="img-fluid" />    
       </div>
       <div className="ewaste">
        <h1 style={{textAlign: "center",fontSize:"65px", color:"green"}}>Electrical Waste Management & Recycling Solutions</h1> 
       <br/> <p style={{textAlign: "center", fontSize: "30px",fontFamily:"italic",color:"green"}}>
           "We bring the dead back to life. We do magic!”
       </p>
       <p style={{fontSize: "23px"}}>The biggest hazard to human life is the practice of throwing things away. Throwing away isn’t the solution. Things never go ‘away’ from you. They are still in existence – somewhere posing threat to other innocent lives. You either exterminate it forever or recycle it to save the planet.</p> 
       <p style={{textAlign: "center", fontSize: "35px",color:"green",fontFamily:"italic"}}>That’s Exactly What WE Do!
       </p>  
       <p style={{fontSize: "23px"}}>If you care for the planet you live in, think of a way to 
       dispose e-waste without causing harm to the environment – Think Of Us</p>
       <p style={{textAlign: "center", fontSize: "23px"}}>We recycle e-waste to give them a new lease of life and help them revolve back again in the economy</p>
       </div>
       <div style={{marginLeft: "98px", marginRight: "98px"}}>
       <div className="row"> 
        <div className="col-xl-4 col-lg-4">    
       <div className="boxes">
       <img style={{position:"relative",transform:"translateY(-45px)",borderRadius:"20%"}} src={process.env.PUBLIC_URL+"/images/Asset-Refubishment1.png"} alt="Asset-Refubishment1" clsss="img-fluid" />
       <h1 style={{marginTop: "-5px",color: "green "}}>Asset Refurbishment</h1>
       <p style={{marginTop: "30px", fontWeight: "lighter"}}>Sustainable recycling comprises of ther R's i.e, Reduce, Resue and recycle. Refubishment or repair of used electronic assets to bring them back to life, is the lease polluting process of responsible recycling.</p>
       </div> 
        </div>
        <div className="col-xl-4 col-lg-4"> 
       <div className="boxes" >
           <img style={{position:"relative",transform:"translateY(-45px)",borderRadius:"20%"}} src={process.env.PUBLIC_URL+"/images/Data-Destruction1.png"} alt="Asset-Refubishment1" clsss="img-fluid" />
           <h1 style={{marginTop: "-5px", color: "green"}}>Data Destruction</h1>
           <p style={{marginTop: "45px", fontWeight: "lighter"}}>Securty of the confidential data stored in the hard drives of your PC's, Laptops and servers is a concern. We provide 3X data destruction service that guarantees a 100% data security and too at your doorstep..</p>
           </div>    
           </div>
           <div className="col-xl-4 col-lg-4"> 
               <div className="boxes" >
                   <img style={{position:"relative",transform:"translateY(-45px)",borderRadius:"20%"}} src={process.env.PUBLIC_URL+"/images/Reverse-Logistics1.png"} alt="Asset-Refubishment1" clsss="img-fluid" />
                   <h1 style={{marginTop: "-5px", color:"green"}}>Reverse Logistics</h1>
                   <p style={{marginTop: "45px", fontWeight: "lighter"}}>Logistics cost is one of he biggest factors in managing e-waste disposal. Due to the geographical conditions of our country, the logistics costs lays a huge burden on the organized sector working in e-waste.</p>
                   </div>    
                   </div>
               
       </div>
       </div>
       <div className="row" style={{margin:"88px"}}>
       <h1 style={{fontSize: "65px",marginLeft:"250px",  color: "green"}}>PRO Services For EPR</h1> 
        <div className="col-lg-6 col-xl-6">
        <img src={process.env.PUBLIC_URL+"/images/typesofe-waste.jpg"} alt="typeofe-waste" className="img-fluid" />    
        </div>   
       <div className="col-lg-6 col-xl-6">
  
        <h3 style={{marginTop: "18px",color:"green"}}>What is the role of a PRO?</h3>
        <p style={{marginTop: "25px", fontSize: "20px"}}>A Producer Responsibility Organisation is an organisation that supports producers meets their EPR targets using a variety of dismantlers and recyclers in the country. It is responsible for setting up a collection mechanism for the targeted material. PRO creates awareness for recycling of e-waste.</p> 
        <h3 style={{color:"green"}}>What we are offering?</h3>
        <p style={{marginTop: "18px",fontSize: "20px"}}>At EWaste Recycle Hub, we guarantee a perfect solution for all bulk producers of electric and electronic equipment to meet their EPR targets. With us, expect a fully transparent model of operation in the process. We are experts in meeting the targets in a specified timeframe.</p>
       </div>
       </div>
       <div className="row" style={{marginLeft:"10px",marginRight:"10px"}}>
       <div className="col-lg-6 col-xl-6">
        <img className="img-fluid" alt="e-waste collection" src={process.env.PUBLIC_URL+"/images/e-wastesolution.jpg"} />   
       </div>    
       <div className="col-lg-6 col-xl-6">
       <img className="img-fluid" alt="e-waste collection" src={process.env.PUBLIC_URL+"/images/ewaste.jpg"} />
       </div>
       </div>
       <div style={{backgroundColor: "whitesmoke", marginTop: "45px", width: "100%", height: "600px", padding: "45px"}}>
       <h1 style={{textAlign: "center", color:"green"}}>E-Waste Management across the India</h1>
       <br/><div className="row" style={{margin:"5px"}}>
       <div className="col-lg-4 col-xl-4">
       <div className="card" style={{width:"350px",textAlign:"center"}}>
         <img className="card-img-top" src={process.env.PUBLIC_URL+"/images/card1.jpg"} alt="Card image" />
         <div className="card-body">
           <h4 className="card-title">Certified Recycling</h4>
           <p className="card-text">We provide a 'Green Certificate' or a 'Destruction Certificate' to each of our clients after the safe disposal of their e-waste</p>
           
         </div>
       </div>
       </div> 
       <div className="col-lg-4 col-xl-4" >
       <div className="card" style={{width:"350px",marginLeft:"50px",textAlign:"center"}}>
         <img className="card-img-top" src={process.env.PUBLIC_URL+"/images/card2.jpg"} alt="Card image" />
         <div className="card-body">
           <h4 className="card-title">Data Destruction</h4>
           <p className="card-text">The hard disks are shredded into less than 5mm of size and separated manually to recover valuable metals out it.</p>
         </div>
       </div>
       </div>
       <div className="col-lg-4 col-xl-4">
       <div className="card" style={{width:"350px",marginLeft:"50px",textAlign:"center"}}>
         <img className="card-img-top" src={process.env.PUBLIC_URL+"/images/card3.jpg"} alt="Card image" />
         <div className="card-body">
           <h4 className="card-title">IT Refurbish</h4>
           <p className="card-text">repair of used electronic assets to bring them back to life, is the lease polluting process of responsible recycling.
       
           </p>
         </div>
       </div>
       </div>
       </div>
       </div>
       <div style={{marginTop:"55px",marginBottom:"70px"}} className="row">
         <div className="col-lg-8 col-xl-8">
         <img src={process.env.PUBLIC_URL+"/images/ewasteimg1.jpg"} alt="ewasteimg1" className="img-fluid" />  
         </div>
         <div className="col-xl-4 col-lg-4">
           <p style={{color: "green", fontSize: "28px"}}>Living in the world of digital technology and electronics, has not only emerged as a boon but also as a bane. It has helped us solve many real world problem in the most efficient way, nonetheless, it has turned out to be one of the biggest problems when it comes to the disposal over the years.</p>
         </div>
       </div>
       
       </div>

    );


}
export default EWaste



