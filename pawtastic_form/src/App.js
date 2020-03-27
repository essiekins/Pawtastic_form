import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="MainContainer">
        <div className="Sidebar">
          <div className="nav-map">
            <ul>
              this part is for the navi
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div> {/*end of nav map */}
          <div className="save">Save and Exit</div>
        </div> {/*end of sidebar */}
        <div className="greetings"><h1>Write the info for my forms here</h1></div>
        <div className="inputs-block">all the forms go here</div>
        <div className="Nav-ctrl-bar">
          back and next buttons here
        </div>{/*end of nav-ctrl-bar */}
      </div> {/* end of main container */}
    </div>
  );
}

export default App;
