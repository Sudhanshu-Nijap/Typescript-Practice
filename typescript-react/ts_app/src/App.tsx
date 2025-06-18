import TodoLayout from "./components/Todo/TodoLayout";
import Counter from './components/Counter/Counter';
import React,{useState} from 'react';

const myTodo = [
  {
    id: 1,
    name: "Sudhu",
    age: 19
  },
  {
    id: 2,
    name: "manas",
    age: 15
  },
  {
    id: 3,
    name: "raj",
    age: 22
  },
];

const App: React.FC = () => {
  const [state,setState] = useState<boolean>(true)
  return (
    <div>
      <TodoLayout items={myTodo}/>
      <TodoLayout items={myTodo}/>
      <TodoLayout items={myTodo}/>
      <button
      onClick = {()=>setState((prev)=>!prev)}
      >Toogle</button>
      {state ? <Counter/> : ""}
    </div>
  );
};

export default App;
