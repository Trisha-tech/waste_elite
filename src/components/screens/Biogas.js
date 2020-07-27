import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import rottenfruits from '../../rottenfruits.jpg'


const Biogas = () => {

    return (
       
     <div>
        <div class="foodwaste" style={{backgroundImage:`url(${rottenfruits})`}} >
        <h1 style={{fontSize:"65px"}}>Home Biogas</h1>
        <h1>(Turning Food Waste into Renewable Energy)</h1>
      </div>
      <div style={{marginTop: "98px", marginLeft:"98px  "}}>
        <div class="row" style={{display:"flex"}}>
          <div class="col-xl-5 col-lg-5">
            <img src={process.env.PUBLIC_URL+"/images/biogas4.jpeg"} alt="magically transform your waste" class="img-fluid" />
          </div>
          
          <div class="col-xl-7 col-lg-7" style={{paddingRight:" 45px"}}>
          
            <h1 style={{color:"green",fontFamily: "'Roboto', sans-serif " }}>What are Biogas Plants?</h1>
           <br/> <p style={{fontSize: "20px",fontFamily: "'Roboto', sans-serif " }}>A biogas plant is where biogas is produced by fermenting biomass. The substrate used
              for the production of this methane-containing gas usually consists of energy crops such as corn, or waste
              materials such as manure or food waste. The fermentation residue left over from the substrates at the end of
              the process can be used as fertilizer.
              <br/><br/>The biogas is produced by the microbacterial decomposition of the substrate in an oxygen-free
              environment, i.e. under anaerobic conditions. To do this, the substrate is pumped into the fermenters. The
              substrate is stored here under anaerobic conditions and is periodically shifted by agitators to avoid the
              formation of surface scum and sinking layers. This also allows the biogas to rise more easily. Unlike in the
              decomposition of biomass under aerobic conditions (for example, composting), under anaerobic conditions the
              microbacterial organisms can only use a small part of the energy contained. The anaerobically non-usable
              energy is contained in the “waste product” of biogas in the form of biomethane.
            </p><br/>
            <h1 style={{textAlign:"center",fontFamily:"Impact",color:"darkGreen"}}>GO GREEN</h1><h3 style={{textAlign:"center",color:"darkGreen"}}>There is no Planet B</h3><br/>
          </div>
        </div>
      </div>
      <div class="row" style={{marginTop:"64px"}}>
        <div class="col-xl-6 col-lg-6" style={{paddingLeft:"68px",fontFamily: "'Roboto', sans-serif " }}>
          <h1 style={{color: "green"}}>Advantages of Biogas as Fuel</h1><br/>
          <h4>
            <ol>
              <li>High Calorific Value</li>
              <li>Clean Fuel</li>
              <li> No Smoke Produced</li>
              <li>Non Polluting </li>
              <li> Economical</li>
              <li> Can Be Supplied through Pipelines</li>
              <li>Burns readily-has convenient Ignition Temperature </li>
            </ol>
          </h4>
          <img src={process.env.PUBLIC_URL+"/images/biogas5.jpeg"} alt="biogas5" class="img-fluid" style={{marginTop:"45px"}} />
        </div>
        <div class="col-lg-6 col-xl-6">
          <img src={process.env.PUBLIC_URL+"/images/biogas3.jpeg"} class="img-fluid" alt="biogas3" />
      <br/><br/><br/>  <br/><h1 style={{color:"darkGreen"}}>Whenever life gives you shit, make valuable biogas from it</h1>
          </div>
      </div>
      <div style={{margin:"65px"}}>
        <h1 style={{textAlign: "center", color: "green",fontFamily: "'Roboto', sans-serif " }}><strong>How to Set up biogas Plant at Home</strong></h1><br/>
        <div class="row" style={{fontFamily: "'Roboto', sans-serif " }}>
          <div class="col-xl-6 col-lg-7">
            <p style={{fontSize:"20px", marginTop: "48px"}}>Here is the homemade cheap and easy to build mini Biogas plant. It
              burns for approx. 20-30 mins on a bunsen burner. You can add anything from your kitchen waste ( Except Onion
              peels and eggshells). In 12 hours, the Gas is ready for use. It is very easy and cost effective to build (only
              2-3 dollars) and gives many useful products.
              <br/><br/><h4>The end products of this system are:</h4>
             <strong> 1) Methane :</strong> (Can be used as a fuel)<br/>
             <strong> 2) Slurry :</strong> (the spent slurry is exellent manure)<br/><br/>
            <h4> The main components of this system are:</h4> 
    
              1) Inlet Pipe<br/>
              2) Digester Tank<br/>
              3) Gas Holder Tank<br/>
              4) Slurry Outlet Pipe<br/>
              5) Gas Outlet Pipe<br/><br/>
              </p>
            <h3 style={{color: "green"}}>Step 1: Choose the Correct Container</h3>
            <p style={{fontSize: "20px"}}>You will have to choose a correct size container which will act as a digester tank.
            </p>
            <h3 style={{color: "green"}}>Step 2: Make Holes</h3>
            <p style={{fontSize: "20px"}}>Make holes in the tank for Inlet and Outlet. For this I took a old iron rod and
              heated it to make holes.<br/><strong> CAUTION:</strong> Rod is really very hot.</p>
            <h3 style={{color: "green"}}>Step 3: Fix the Inlet and Outlet Pipes</h3>
            <p style={{fontSize: "20px"}}>Glue the Inlet pipe and the Outlet pipe with any water proof adhesive.
    
            </p>
            <h3 style={{color: "green"}}>Step 4: Making the Gas Holder Tank
            </h3>
            <p style={{fontSize: "20px"}}>I took a paint bucket of 20 Lts for making a gas holder tank. This tank holds the
              gas produced. The tank is overturned and fixed with a valve used for plumbing purposes.</p>
            <h3 style={{color: "green"}}>Step 5: Time to Mix the Cow Dung !</h3>
            <p style={{fontSize: "20px"}}>Mix the cow dung (5kg for 50 litres) and add water to make a fine slurry. Now put
              the slurry in the digester tank.</p>
            
            <h3 style={{color: "green"}}>Step 6: Almost Finished!</h3>
            <p style={{fontSize: "20px"}}>Put the gas holder tank overturned in the digester tank after adding the slurry .
             <br/><strong> REMEMBER:</strong> Open the valve while putting the gas holder tank. The mini plant takes 10-15 days for the first time
              to get output. For the first time, the gas in the tank won't burn as it contains Carbon Dioxide gas, if
              fortunately it burns then good or wait for the second time. You can detect how much gas is there in this
              system, the gas holder tank will rises up as the gas is produced.</p>
            
    
    
          </div>
          <div class="col-lg-6 col-xl-6">
            <img src={process.env.PUBLIC_URL+"/images/biogas6.jpeg"} class="img-fluid" alt="biogas6" />
            <div class="V hoverable" style={{marginTop:"80px",marginRight:"20px",width:"560px", height:"315px"}}>
              <iframe  width="560" height="315"
               src="https://www.youtube.com/embed/pKZgnXQCp98" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div style={{marginRight:"20px",marginTop:"40px"}}>
            <img style={{width:"100%",height:"380px"}} src={process.env.PUBLIC_URL+"/images/bio1.jpeg"} />
            </div>
            </div>
        </div>
      </div>
      <div style={{fontFamily: "'Roboto', sans-serif " }}>
        <h1 style={{margin: "78px", color: "green"}}> At Waste Elite ,You can also buy Portable Biogas Plant for Your Home</h1>
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <img src={process.env.PUBLIC_URL+"/images/Domestic.png"} alt="domestic biogas plant" class="img-fluid" />
          </div>
          <div class="col-xl-6 col-lg-6" style={{marginTop:"54px"}}>
            <p style={{fontSize:"20px"}}>Biogas generated in domestic plant is used in partial/whole LPG replacement for
              cooking purpose in households.</p>
            <h3 style={{color: "green"}}>Advantages</h3>
            <ol style={{fontSize: "18px"}}>
              <li>Easy to Install
              </li>
              <li>Easy to operate</li>
              <li>High quality material (Fibre Reinforced Plastic- FRP)</li>
              <li>Reliability</li>
              <li>Versatility</li>
              <li>No foul smelling</li>
              <li>Kills harmful disease causing pathogens</li>
    
            </ol><br/><br/>
            <p>
            <h3 style={{color:"red"}}><strong>Price: Rs 18,000</strong></h3>
            </p>
          </div>
        </div>
      </div>
      <div style={{margin: "67px",fontFamily: "'Roboto', sans-serif " }}>
        <h1 style={{textAlign: "center", color: "green"}}><u>DO's And DON'Ts</u></h1><br/>
        <div class="row">
          <div class="col-lg-6 col-xl-6">
            <h3 style={{color:"green"}}>Do's</h3><br/>
            <p style={{fontSize: "18px"}}>
              1. Biogas plant must be filled with cow dung as inoculum for initial start-up only.
              <br/><br/>
              2. Biogas plant/ Bio-Digester should be placed in open area of smooth & even surface to avoid any physical
              damage.
              <br/><br/>
              3. Biogas plant should be fed daily without fail for the proper operation of the plant.
              <br/><br/>
              4. Solid organic wastes such as vegetable waste, food waste, fruit peels must be mixed with water in a ratio of
              1:1 before feeding into the biogas plant.
              <br/><br/>
              5. The particle size of the solid waste should be below 25 mm.<br/><br/>
              6.The liquid organic wastes like leftover milk, curd, rice wash water, dhal wash water, kanji waste water etc
              can be directly fed into the digester.<br/><br/>
              7.The gas hose piping from the biogas plant to the kitchen biogas stove is recommended to be in a tapered
              position.<br/><br/>
              8.Slurry from the biogas plant should be diluted with water before using it as fertilizer.<br/>
           <br/>   9.Water in the outer water jacket portion must be checked at regular time intervals in order to make sure that
              the water level is not falling down.
    
            </p>
          </div>
          <div class="col-lg-6 col-xl-6">
            <h3 style={{color:"green"}}>Don'ts</h3><br/>
            <p style={{fontSize: "18px"}}>
              1. Do not over feed the biogas plant as it creates acidity & reduction in microbial population.<br/><br/>
              2. Avoid feeding chemicals, acid (avoid acidic substances like tamarind & Citrus fruit wastes), plastics,
              papers, glass & rubber into the biogas plant which will affect the biogas plant functioning by killing
              methanogenic microbes.<br/><br/>
              3. Avoid feeding more waste into the biogas plant if the previously generated biogas is not used and is stored
              in the gas holder.<br/>
    
            </p>
            <img src={process.env.PUBLIC_URL+"/images/bio2.jpeg"} />
          </div>
        </div>
            
</div>
</div>
    );


}
export default Biogas



