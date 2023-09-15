import React from 'react';

class App extends React.Component {
  render() { 
    console.log('RENDER');
    return (
      <div className="App">
        <h1>Component Life Cycle</h1>
        {this.state.count}
        <button onClick={this.handleClick} >Increment Count</button>
        <p>see the console.</p>
      </div>
    );
  }
}

export default App;
