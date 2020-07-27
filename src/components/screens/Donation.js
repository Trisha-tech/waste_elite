import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { Switch } from 'react-router-dom'
import donate2 from '../../donate2.jpg'


const Donation = () => {

  return (
    <div style={{ marginTop: "40px" }}>
      <div class="donate" style={{ backgroundImage: `url(${donate2})` }}>
      </div>
      <div style={{ margin: "65px" }}>
        <div class="row">
          <div class="col-lg-5 col-xl-5">
            <img src={process.env.PUBLIC_URL + "/images/don.png"} alt="donate your old clothes" class="img-fluid" />
          </div>
          <div class="col-lg-7 col-xl-7" style={{ marginTop: "35px" }}>
            <h1 style={{ color: "green" }}>"Happiness doesn't result from what we Get ,but from what we Give"</h1><br />
            <p style={{ fontSize: "18px" }}>When you donate your Old Clothes, make sure that they aren't torn or dirty. Donate
            when it doesn't fit you anymore, but only if the clothes are in good condition. Don't Donate dirty or torn
            clothes, because it's humilating. And no one deserves to such clothes. Treat Others as you would like to be
              treated. </p><br />
            <h1 style={{ color: "green" }}>"Giving is not just about making a donation. It's about making a difference"</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-xl-6" style={{ paddingLeft: "44px" }}>
          <h1 style={{ color: "green" }}>The Measure of life is not its Duration, but its Donation </h1><br />
          <p style={{ fontSize: "18px" }}>Instead of keeping them in, you can donate them to Libraries so that whoever might need
          your old college textbooks can find them easily. There will always be someone out there who will surely put
            those Old Books to Good Use</p>
        </div>
        <div class="col-lg-6 col-xl-6">
          <img src={process.env.PUBLIC_URL + "/images/Donatebooks.png"} alt="donate books" class="img-fluid" />
        </div>
      </div>
      <div style={{ margin: "90px" }}>
        <h4>Waste Elite also collects old books and Clothes and then distribute these things among needy people.</h4> <br />
        <br />
        <h1 style={{ color: "green" }}>“A book is not only a friend, it makes friends for you. When you have possessed a book
        with mind and spirit, you are enriched. But when you pass it on you are enriched threefold.”
                     </h1>
      </div>
      <div class="row" style={{ marginLeft: "5px", marginRight: "5px" }}>
        <div class="col-xl-4 col-lg-4">
          <img style={{ height: "220px" }} src={process.env.PUBLIC_URL + "/images/don.jpg"} alt="donate old books" class="img-fluid" />
        </div>
        <div class="col-xl-4 col-lg-4">
          <img src={process.env.PUBLIC_URL + "/images/books.jpg"} alt="donate old books" class="img-fluid" />
        </div>
        <div class="col-xl-4 col-lg-4">
          <img src={process.env.PUBLIC_URL + "/images/don3.png"} alt="donate old books" class="img-fluid" />
        </div>

      </div>


    </div>

  );


}
export default Donation



