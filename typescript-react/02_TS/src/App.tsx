import './App.css'
import {useEffect, useState} from 'react';
import TodoItem from '../../ts_app/src/components/Todo/TodoItem/TodoItem';
import axios from 'axios'

interface Todoitem{
   completed: boolean;
   id: number;
   title: string;
   userId: number
}
const App:React.FC = () => {
  const [todos,setTodos] = useState<TodoItem[]>([]);

  useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(res => res.json())
  //   .then(data => setTodos(data));
  // },[]);

  
  axios.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos')
    .then(res => setTodos(res.data));
  },[]);

  return(
    <>
    {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </>
  );
};

export default App;
