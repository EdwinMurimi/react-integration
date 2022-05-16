import react, {useState, useEffect} from 'react';
import Card from './components/Card';
import axios from 'axios';
import './App.css';

function App() {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const getTodos = () => {
    axios.get('https://my-json-server.typicode.com/EdwinMurimi/my-server/todos')
      .then(res => setTodos(res.data))
      .catch(error => setError(error.message));
  }
  // useEffect(callback, dependency array)
  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = () => {
    // put your logic
  }

  console.log(todos);
  return (
    <div className="App">
      {error ? <h4>{error}</h4> : todos?.map(todo => <Card todo={todo}/>)}
    </div>
  );
}

export default App;
