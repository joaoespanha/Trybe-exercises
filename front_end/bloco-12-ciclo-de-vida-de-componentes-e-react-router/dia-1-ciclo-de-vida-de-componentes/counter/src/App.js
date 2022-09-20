import Counter from './components/Counter';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      hideCounter: true,
    }
    this.ONE_SECOND = 1000;
  }
  startCounter = () => {
     this.intervalId = setInterval(()=>{
      this.setState(({
        counter:  this.state.counter < 5 ? this.state.counter + 1 : 0,
      }));
    }, this.ONE_SECOND)
  }

  toogleCounter = () => {
     this.setState({
      hideCounter: !this.state.hideCounter,
      counter:  0,
    })
    clearInterval(this.intervalId)
  }
  

  render() {
    
    const { hideCounter, counter } = this.state;
    return(
      <div>
        { !hideCounter && <Counter btnFunc={this.startCounter} counter={counter} /> } 
        <button onClick={this.toogleCounter} >{hideCounter ? "Show Counter" : "Hide Counter"}</button>
      </div>
    )
  }
}

export default App;