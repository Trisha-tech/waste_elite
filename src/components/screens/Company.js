import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import background from '../../background.jpg'


const Company = () => {

    return (
        <div>
            <div className="container-fluid">
                <div 
                 style={{backgroundImage:`url(${background})`,
               color:"white", padding:"100px",textAlign:"center",  height:"250px",width:"1300px",fontSize:"75px",marginTop:"50px",marginLeft:"-50px"}}>
                    <h1 > Our Supporting Companies</h1>
                </div>
                <div className="company1">
                    <h1 style={{color:"green",marginTop:"80px",marginBottom:"20px"}}><strong>1. Shayna Ecountified</strong></h1>
                </div>
                <div style={{width:"1300px",marginLeft:"-50px"}}>
                    <img 
                    src="images/banner3.jpg" alt="india's first company" className="img-fluid" />
                </div>
            </div>

<div className="company1">
  <div className="row" style={{marginRight:"50px",marginTop:"50px"}}>
    <div className="col-sm-6 col-md-6">
      <p>The alarming surge in usage of non-biodegradable plastic products has impacted the ecosystem at hazardous
        levels leaving the planet choked every single day. Shayna EcoUnified India Pvt. Ltd. has been incorporated
        with the intent to reduce the dumping of plastics in the environment to save the planet, creating affordable
        structural materials from the plastic waste and thus creating a better tomorrow for the generations to come.
        <br /><br />This has been possible through a golden handshake with the Council of Scientific & Industrial
        Research
        (CSIR)-National Physical Laboratory’s (NPL), with whom this technology was developed, tested and certified for
        usage in multiple applications. Using plastic waste materials, we are able to turn plastics into high
        performance materials in the form of High Density Composite polymer (HDCP) tiles and blocks. These materials
        are weather resistant, chip resistant, acid proof, durable and offer better structural stability at a lower
        cost as compared to conventional materials in addition to protecting the environment from plastic dumping.
        <br /><br />Shayna EcoUnified India Pvt. Ltd. has dedicated its existence into transforming the adverse effects
        of
        plastics into composite and affordable structural tiles for societal benefit. Having a recyclable
        infrastructure in place and driven with a single point focus to turn plastics into high performance materials,
        Shayna EcoUnified India Pvt. Ltd. strives to deploy cost-effective architectural tiles further redirecting the
        recycling dimension of India towards an evolution.</p>

    </div>
    <div className="col-sm-6 col-md-6" >
      <img style={{height:"450px"}} src={process.env.PUBLIC_URL+"/images/man.jpeg"} className="img-fluid" />
    </div>

  </div>
</div>

<div  style={{marginTop:"20px",marginBottom:"15px",color:"green",textAlign:"center"}}>
  <h1  >Products</h1>
</div>
<div >
  <div className="row" style={{marginLeft:"30px",marginRight:"30px"}}>
    <div className="col-sm-6 col-md-6 col-lg-4" >
      <div className="card" style={{width:"350px"}}>
        <img className="card-img-top" src="images/pavertiles.jpg" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">HDCP Paver tiles</h4>
          <p className="card-text">Interlocking tiles are extensively demanded for their wide spectrum of applications
            in
            offices, residences and other various commercial...</p>

        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-6 col-lg-4" >
      <div className="card" style={{width:"350px"}}>
        <img className="card-img-top" src="images/floortiles.jpg" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">HDCP Floor tiles</h4>
          <p className="card-text">Interlocking tiles are extensively demanded for their wide spectrum of applications
            in
            offices, residences and other various commercial...</p>

        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-6 col-lg-4">
      <div className="card" style={{width:"350px"}}>
        <img className="card-img-top" src="images/designertiles1.jpg" alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">Designer tiles HDCP tiles</h4>
          <p className="card-text">Interlocking tiles are extensively demanded for their wide spectrum of applications
            in
            offices, residences and other various commercial...</p>

        </div>
      </div>
    </div>


  </div>
</div>

<div className="company1">
  <h2 style={{color:"green",marginTop:"80px"}}> <strong>2. Green-o-Tech India</strong> </h2>
</div>

<div className="company1">
  <div className="row" style={{marginRight:"50px",marginTop:"30px"}}>
    <div className="col-sm-6 col-md-6">
      <p>
        Recycling is not an only a process to convert the waste into reusable products but it have bigger
        prospective effect on Environment, Society and Economy. In present scenario Global Warming is a major issue
        for survival of human and other species on earth. If we analysis the current scenario we are found every
        year environment give us many surprises, so many changes due to CLIMATE CHANGE- a change in global or
        regional or geographical climate patterns. Many countries are facing Global warming impacts; millions of
        people are suffering with climate change issues. 
      
      </p>
    </div>
    <div className="col-sm-6 col-md-6">
      <img src="images/banner4.jpg" alt="green-o-tech india" className="img-fluid" />
    </div>
  </div>
  </div>
  <p style={{marginLeft:"80px",marginRight:"50px"}}>  With the mission of converting waste to wealth Green-O-Tech India was introduced by Mr. Prashant Rana
  (Founder & CEO) in the year of 2010. Mr. Prashant Rana was awarded with “50 Most Impactful Green Leaders-
  Global Listing 2017” for his outstanding contribution and excellence achieved in the domain of waste
  management and recycling services across India. This award was acknowledged Mr. Prashant Rana’s vibrant and
  proactive role in the Paper and Wood recycling domain. His contribution to motive and get involve people in
  his green initiative of converting waste to wealth is unforgettable.</p>
<br/><br/>

<div className="container-fluid" style={{width:"1350px",marginLeft:"-50px"}}>
  <div className="contribution">
    <br/><br/><h1 className="text-center">Contribution To Society & Environment </h1>
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-lg-3">
          <div className="box">
            <i className="fas fa-cloud fa-7x"></i>
            <h1>462K <span style={{fontsize:"26px"}}>ton</span></h1>
            <span className="text-center" style={{fontsize:"20px;"}}> Carbon Saved</span>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-3">
          <div className="box">
            <i className="fas fa-tint fa-7x"></i>
            <h1>3,780 M <span style={{fontsize: "26px"}}>Lts</span></h1>
            <span className="text-center" style={{fontsize:"20px"}}> Water Saved</span>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-3">
          <div className="box">
            <i className="fas fa-lightbulb fa-7x"></i>
            <h1>516 GW</h1>
            <span className="text-center" style={{fontsize:"20px"}}> Electricity Saved</span>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-3">
          <div className="box">
            <i className="fas fa-users fa-7x"></i>
            <h1>153 <i className="fas fa-plus "></i>
              <span className="text-center" style={{fontsize: "26px"}}>Families
              </span></h1>
            <span style={{fontsize:"20px"}}> Livelihood</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<br/><br/><br/>
  <h1 className="text-center" style={{textAlign:"center",color:"green"}}>Their Best Products</h1>
 <br/> <div className="row">


    <div className="company1">
      <div className="row" >
        <div className="col-sm-6 col-md-6 col-lg-4" >
          <div className="card" style={{width:"360px"}}>
            <img className="card-img-top" src="images/paperpencils.jpg" alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Paper Pencils</h4>
              <p className="card-text">Well, every time you purchase a wooden pencil, it means you are contributing to
                the
                destruction of trees in the forests. A 20-feet Pine tree needs to be cut down to make 2500 pencils and
                there are over 15 billion pencils produced worldwide every year just think how much trees we cut down
                every year.<br /><br /> <strong>Features:</strong>Lightweight,
                High strength,
                Long lasting,
                Smooth writing,
                Sharpens easily,
                100% eco-friendly.</p>

            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="card" style={{width:"360px"}}>
            <img className="card-img-top" src="images/dairy.jpg" alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Executive Diaries</h4>
              <p className="card-text">Made with High Quality Recycled Paper,
                Get Customise your Diary as per your Requirement,
                Made with Premium Quality Material,
                Strong Biding with Long Life,
                Beautiful cover Design for Corporate & Personal use.
              </p>

            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4">
          <div className="card" style={{width:"360px"}}>
            <img className="card-img-top" src="images/paperbag.jpg" alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Recycled Paper bag</h4>
              <p className="card-text">We have high quality People Bags manufacture with high quality recycle paper,
                offering large range of designs and sizes. We are engaged in providing Eco-Friendly Paper Bags which
                are suitable for gifting, shopping, and packaging purposes.These paper bags come with strong handles
                to impart a firm and comfortable grip. We are offering a wide range of Recycled Paper Bags .</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className="company1">
  <h1 style={{color:"green",marginTop:"80px",marginBottom:"20px"}}><strong>3. Attero Electronics</strong></h1>
</div>
<div className="company1">
  <div className="row">
    <div className="col-sm-6 col-md-6">
      <p>India’s largest electronic asset management company and clean-tech pioneer, Attero actively promotes
        eco-friendly reuse and recycling of electronics. As India’s only end-to-end e-Waste recycler and metal
        extraction company, they aim to turn today’s waste into sustainable resources for tomorrow. They are the
        only company in India, as well as one among few other elite organizations globally, with the capability to
        extract pure metals from end- of-life electronics in an environmentally responsible manner. As a NASA
        recognized technology innovator, They have developed disruptive technology that allows us to set up low
        cost, low capacity eco-friendly recycling plants for processing e-Waste and extracting rare earth and
        precious metals. They have already set up a state-of-the-art recycling facility for recovering reusable
        resources from electronic waste in an eco-friendly manner. To facilitate collection of electronic waste
        from all across the country, Attero has also set up one of the largest reverse logistics network, backed
        by tightly integrated IT solutions for higher efficiency.</p><br/>
      <h4 style={{color:"green"}}> 1. Customized Solutions for Electronic Asset Management:</h4>
      
        <li>Cost-effective solutions for electronic asset management</li>
        <li>International Data Security Standards for Data Sanitization & Data Destruction
        </li>
        <li>De-Installation of
        electronic assets</li>
        <li>Best Practices for Evaluation of Resale Value of assets</li>
      <br/>
      <h4 style={{color:"green"}}>2.Eco-friendly Resource Recovery from E-Waste</h4>
      <li>
        Environmentally responsible, end-to-end E-Waste Management
      </li>
      <li>Resource Recovery and Metal Extraction from various types of E-Waste</li>
    </div>
    <div className="col-sm-6 col-md-6">
      <img style={{width:"500px",height:"560px"}} src={process.env.PUBLIC_URL+"/images/attero.jpg"}  className="img-fluid" />
    </div>
  </div>

</div>
<br/><br/>
            
  <h1 style={{color:"green",marginLeft:"80px",marginTop:"80px",marginBottom:"20px"}}><strong>4. Vanshika Plastic industries</strong></h1> <br/>
 <div className="company1">
    <div className="row" style={{marginRight:"50px"}}>
      <div className="col-sm-6 col-md-6">
        <p>Vanshika Plastic Industry is an environment-conscious company that aims to re-use the waste plastic
          that is often released in the environment. The waste plastic is used for making the finest quality
          Plastic Granules that can be used in the manufacturing of several plastic items. We are known
          throughout our region as a trusted Recycled Plastic Raw Materials producer. We have secured a place in
          the Indian market amongst the Recycled Plastic Granules manufacturers.
          <br /><br /> Vanshika Plastic Industries is a Delhi (India) based business whose main motive is to promote
          the use of recycled plastic granules. The offered range of granules can be utilized in the production
          of a vast range of plastic products, such as chairs, mugs, bottles, tanks, to name a few. The waste
          material is processed into granular form in attractive colors. These granules are known for their fine
          finishing and easy malleability. High-tech machinery are employed in the production of plastic
          granules according to the set national standards. To safely store the recycled plastic granules in
          bulk quantity, we have set-up a warehousing facility. Customers can avail from us a wide range of
          granules, from HDPE Granules, LDPE Granules to LLDPE Granules.

        </p>
      </div>
      <div className="col-sm-6 col-md-6" >
        <img style={{height:"370px"}} src={process.env.PUBLIC_URL+"/images/plasticgranules1.jpg"}  className="img-fluid" />
      </div>
    </div>
  </div>

            <div className="container-fluid" style={{width:"1350px",marginLeft:"-50px"}}>
            <img src="images/banner2.jpg" alt="india's first company" className="img-fluid" />
            </div>
        </div>



    );


}
export default Company



