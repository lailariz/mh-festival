import React, { Component } from 'react';

class Routes extends Component {
  render() {
        // Google maps iframe <iframe title="Our route" src="https://www.google.com/maps/d/u/0/embed?mid=1HgCI-CQOL3bpz0CPGsNKEWalNI-HuCu0" className="iframe-row"></iframe>
    return (
			<div className="iframe-container">
        <div style={{"overflow":"hidden","position":"relative"}}>
          <div style={{"position":"relative","width":"100%","padding-top":"56.25%","overflow":"visible"}}/>
          <iframe title="Full Route" name="plotaroute_map_645151" src="https://www.plotaroute.com/embedmap/645151" style={{"position":"absolute","top":"0","left":"0","bottom":"0","right":"0","width":"100%", "height":"100%"}} frameborder="0" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </div>
      </div>
    );
  }
}

export default Routes;
