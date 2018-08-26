import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mh from '../img/mh.jpg';


class HomePage extends Component {
  render () {

    return (
      <div className="container">
        <h1 className="title-text">Kunst, Architektur, and Musik Festival</h1>
        <h3 className="title-text">@ <a href="https://www.facebook.com/muellerhof19/">MUELLERHOF19</a></h3>
        <h3>September 21-23</h3>
				<div className="row">
					<div className="col-7">
        		<p>Come to the rolling hills of central Germany and enjoy a weekend of live music, local art, and cool summer nights.</p>
        		<p>Our ambition is to create a self-sustaining, off-grid community. Over the course of the past five years, members of the community have completed projects in permaculture, animal husbandry, renewable energy, water conservation, and more. We invite you to help this community channel new ideas, new forms of expression, and greater openness.</p>
        		<p>If you want to help build out the space for the festival, consider joining out <Link to="/prebuild">prebuild event</Link>. The build event is especially aimed at artists, architects, designers, and students, but all are welcome to join.</p>
					</div>
					<div className="col-5">
						<img src={mh} className="img-fluid" alt="muellerhof" />
        	</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
