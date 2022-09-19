import './App.css';
import React from 'react';
import PersonalDataForm from './components/PersonalDataForm';
import LastJobForm from './components/LastJobForm';
class App extends React.Component{
 

  render() {
    return (
      <div className="App">
        
        <PersonalDataForm />
        <LastJobForm />
      </div>
    );
  }
  
}

export default App;
