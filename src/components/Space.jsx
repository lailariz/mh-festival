import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mhspace0 from '../img/space/mh-space-1.jpg';
import mhspace1 from '../img/space/mh-space-2.jpg';
import mhspace2 from '../img/space/mh-space-5.jpg';
import mhspace3 from '../img/space/mh-space-8.jpg';
import mhspace4 from '../img/space/mh-space-6.jpg';
import mhspace5 from '../img/space/mh-space-7.jpg';

class Space extends Component {
  render () {

    return (
      <div>
        <h1>The Space</h1>
        <p>The week prior to the music festival, participants in the <Link to="/prebuild">prebuild event</Link> will transform this transform the barn into living space. Here's a sneak peak of the barm</p>
        <div className="row d-block">
          <a href={mhspace1} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace1} alt="" />
          </a>
          <a href={mhspace0} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace0} alt="" />
          </a>
        </div>
        <div className="row d-block">
          <a href={mhspace2} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace2} alt="" />
          </a>
          <a href={mhspace3} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace3} alt="" />
          </a>
        </div>
        <div className="row d-block">
          <a href={mhspace4} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace4} alt="" />
          </a>
          <a href={mhspace5} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace5} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Space;
