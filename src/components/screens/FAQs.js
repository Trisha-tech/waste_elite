import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import M from 'materialize-css'


const FAQs = () => {

  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });
  return (
    <div>
      <div style={{ width: "1300px", height: "250px", color: "white", marginBottom: "95px", marginTop: "40px" }}>
        <img style={{ width: "1300px" }} src={process.env.PUBLIC_URL + "/images/faq.jpeg"} />
      </div>
      <ul class="collapsible" style={{ marginBottom: "80px", marginTop: "200px" }}>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>What is Waste Management?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}> <p>Every year around 63 million tonnes of waste is generated in India and most of it ends up in landfills. Waste management companies like Waste  Elite ensure its safe collection, transportation and disposal. We also offer recycling solutions after treating solid waste and provide waste management solutions that maximise resource recovery.
         </p></span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>Why Waste Management is Required?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}>  <p>Waste management is essential for keeping our surroundings clean and hygienic. Lack of proper waste management causes pollution, spreads infectious diseases and causes irreparable damage to our environment. It also entails recycling of hazardous waste to prevent toxicity. Segregation of waste is the key to the success of waste management and it is extremely beneficial for aesthetic as well as environmental well-being.
         </p></span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>What are the environmental impacts of landfills?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}><p>Landfills have tremendous impact on the environment. A large portion of landfill waste consists of biodegradable organic matter from industries, businesses and households. Years after its disposal, many of the material may still release chemicals or hazardous substances into the soil. In most cases, the decomposing material release methane, a dangerous greenhouse gas. It also leads to soil and air pollution.
         </p></span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>How does waste management work in India?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}> <p>Waste collection and disposal is a huge challenge in India. Companies like Waste Elite collect waste from companies and ensures its safe disposal and recycling. The local municipalities and the unorganised sector also collect waste from door-to-door. In most cases, the system is flawed and leads to inadequate disposal.
       </p></span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>Do We really require to manage our waste in daily life in proper way?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}>  <p>Improper waste management is a major cause of environmental pollution. Therefore, it is recommended to reduce waste in your daily life. Segregate your waste and choose sustainable products for daily use. Rotting garbage produces harmful gases that are a major cause of air pollution. It can also cause severe health hazards.</p>
          </span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>What are some effective Waste Management ideas?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}>  <p>Coloured dustbins for different types of waste can be placed to initiate waste segregation. It is easier to dispose and recycle segregated waste and therefore, is a great waste management idea. Encouraging the use of recyclable products and banning single use plastic can work in favour of waste management.
       </p></span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>What type of waste do you Collect?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}>   <p>We collect all kinds of residential, industrial and business waste. Our end-to-end waste management solution helps to handle waste sustainably and responsibly, reducing its impact on the environment. We collect, dispose and recycle waste generated in residential communities, MNCs, tech parks and institutions.
     </p></span></div>
        </li>
        <li>
          <div class="collapsible-header" style={{ fontSize: "20px", letterSpacing: "1px", fontFamily: "Impact" }}><i class="material-icons">Questions</i>How do I contact Waste Elite?</div>
          <div class="collapsible-body" style={{ backgroundColor: "#E0FFFF" }}><span style={{ color: "black", fontSize: "18px" }}>   <p>We are ready to help you with our comprehensive waste management services. Get in touch with us at +91 080 4168 9889 or write to us at info@Wasteelite.com. We have regional offices in Delhi, Punjab, Lucknow and Hyderabad. Contact any of our team members and we shall provide the best solutions for waste management.
   </p></span></div>
        </li>
      </ul>
    </div>

  );


}
export default FAQs







