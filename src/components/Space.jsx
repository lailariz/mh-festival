import React, { Component } from 'react';
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
        <div className="row d-block">
          <a href={mhspace0} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace0} alt="" />
          </a>
          <a href={mhspace1} data-lightbox="mhspace" data-title="">
            <img className="img-fluid col-6 pb-3" src={mhspace1} alt="" />
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
