import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../App'
import M from 'materialize-css'
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


const Footer = (props) => {

  return (

    <div>
      <footer class="page-footer #1b5e20 green darken-4" style={{ height: "400px" }}>
        <div class="container">
          <div class="row" style={{ display: "flex" }}>
            <div style={{ marginTop: "60px" }}>
              <img src={require("../logo4.png")} />
            </div>
            <div class="col l6 s12" style={{ marginLeft: "200px", width: "500px", marginTop: "40px" }}>
              <h5 class="white-text" style={{ width: "300px" }}>Our Services</h5>
              <li style={{ width: "300px" }}><a class="grey-text text-lighten-3" href="/collection">Collection</a></li>
              <li style={{ width: "300px" }}><a class="grey-text text-lighten-3" href="/transport">Transportation</a></li>
              <li style={{ width: "300px" }}><a class="grey-text text-lighten-3" href="/biogas">Biogas SetUp</a></li>

            </div>
            <div class="col l4 offset-l2 s12" style={{ width: "700px", marginTop: "40px" }}>

              <ul style={{ width: "300px" }}>
                <li><a class="grey-text text-lighten-3" href="/about">About Us</a></li>
                <li><a class="grey-text text-lighten-3" href="company">Our Supporting Companies</a></li>
                <li><a class="grey-text text-lighten-3" href="ewaste">EWaste</a></li>
                <li><a class="grey-text text-lighten-3" href="donation">Donation</a></li>
                <li><a class="grey-text text-lighten-3" href="signup">FAQs</a></li>
                <li><a class="grey-text text-lighten-3" href="#!">Contact Us</a></li>
              </ul>
            </div>

            <div className="social-container" style={{ marginTop: "-5px" }}>
              <h5 style={{ textAlign: "center" }}>Follow us on:</h5><br />
              <a href="https://www.youtube.com/channel/UCTivB1dnm6qCHcuDwVbLGWg?" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" style={{ marginTop: "-5px", color: "#ff0000", width: "30px" }} />
              </a>
              <a href="https://www.facebook.com/ELITE-waste-disposal-740684646037337/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ marginTop: "-5px", color: "#3b5998", width: "30px" }} />
              </a>
              <a href="https://twitter.com/elite_waste?s=08" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" style={{ marginTop: "-5px", color: "#1da1f2", width: "30px" }} />
              </a>
              <a href="https://www.instagram.com/waste_elite/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ marginTop: "-5px", color: "#c32aa3", width: "30px" }} />
              </a>
            </div>

          </div>
        </div>

        <div class="footer-copyright" style={{ marginTop: "50px" }}>
          <div class="container">
            <p style={{ marginLeft: "300px" }}>    Waste Elite  © 2020  All rights reserved
  <a class="grey-text text-lighten-4 right" href="#!" style={{ marginLeft: "200px" }}>More Links</a>
            </p>
          </div>
        </div>
      </footer>

    </div>


  )

}
export default Footer


