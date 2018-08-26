import React, { Component } from 'react';

class HomePage extends Component {
  render () {

    return (
      <div>
        <h1>Where and When</h1>
        <h3>Dates: September 14-23</h3>
        <h3>Location: <a href="https://www.google.com/maps/place/Dorfstraße+19,+37124+Rosdorf/@51.5183921,9.8141976,13.46z/data=!4m5!3m4!1s0x47bb2c1518238cb9:0x6f1a93c691899235!8m2!3d51.5069862!4d9.8130333">Dorfstraße 19, 37124 Rosdorf, Germany</a></h3>
      </div>
    );
  }
}

//         <h4>Led by Pete Mueller</h4>
//         <h3><NavLink to="/application">Application</NavLink> Deadline September 7th</h3>
//         <p>Our ambition is to create a self-sustaining off-grid community. Over the course of </p>
export default HomePage;
