import React, { Component } from 'react';

class Schedule extends Component {
  render () {

    return (
      <div>
				<div>
				  <div className="card">
				    <div className="card-header" id="workshop">
				      <h5 className="mb-0">
				          Lehmbau Workshop Wochenende - September 14-16
				      </h5>
				    </div>
				    <div id="weekend1" className="collapse show" aria-labelledby="workshop">
				      <div className="card-body">
				        <p>Fr 14. Sep (15h00)- So 16. Sep (20h00)</p>
				        <p>Alternativer und experimenteller Lehmbau in Theorie & Praxis</p>
				      </div>
				    </div>
				  </div>
					<br></br>
				
				  <div className="card">
				    <div className="card-header" id="headingTwo">
				      <h5 className="mb-0">
				          Building A Creative Eco Community - September 17-21
				      </h5>
				    </div>
				    <div id="week1"  aria-labelledby="headingTwo">
				      <div className="card-body">
				        <p>Mo 17 Sep (09h00)- Fr 21 Sep (15h00)</p>
				        <p>Workshops, Seminare, Vorträge</p>
				        <p>Entwerfen von “Tiny Houses In A Barn”</p>
				        <p>Experimentelles Bauen mit örtlichen, alternativen und nachhaltigen Baumaterialien</p>
				      </div>
				    </div>
				  </div>
					<br></br>

				  <div className="card">
				    <div className="card-header" id="headingThree">
				      <h5 className="mb-0">
				          Kreatives, Eco Musik Festival Wochenende - September 21-23
				      </h5>
				    </div>
				    <div id="collapseThree"  aria-labelledby="headingThree">
				      <div className="card-body">
				        <p>Fr 21 Sep (15h00)- So 23 Sep (20h00)</p>
				        <p>Live Musik, DJs, Organic Food, Cold n Hot Drinks, Art Installations, Funky Fashion</p>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
    );
  }
}
export default Schedule;
