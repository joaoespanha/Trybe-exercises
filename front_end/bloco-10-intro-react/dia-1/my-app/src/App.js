
import './App.css';

function App() {
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  const arryOfTasks = ['limpar a casa', 'fazer os aexercicios da trybe', 'treinar']
  return (
    <>
      {arryOfTasks.map(Task)}
    
    </>
  );
}

export default App;
