import './App.css';
import React from 'react';
import addToDo from './actions/addTodo';
import { connect } from 'react-redux';
class App extends React.Component {
   toDo = {
    description: 'treinar',
    checked: false,
    deadLine: '18H',
  }
  render() {
    const {add} = this.props
   return (
    <div className="App">
     ola

     <button onClick={() => {add(this.toDo)}}>Change theme</button>
    </div>
   );
  }
}
const mapDispatchToProps = dispatch => ({
  add: (state) => dispatch(addToDo(state)),
 });


export default connect(null, mapDispatchToProps)(App);
