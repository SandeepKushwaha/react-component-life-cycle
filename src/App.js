import React from 'react';

class App extends React.Component {
  
  // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  constructor() {
    super();
    console.log('CONSTRUCTOR');
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('COMPONENT DID MOUNT');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('props', this.props);
    console.log('state', this.state);

    if (prevState.count === 0 && this.state.count === 1) {
      // some action
      this.state({ count: 10 });
    }

    // this.state({ count: 10 }); // Giving The Error.
  }

  componentWillUnmount() {
    // cleanup
    console.log('COMPONENT WILL UNMOUNT');
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

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
