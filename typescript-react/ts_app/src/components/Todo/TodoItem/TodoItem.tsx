import "./style.css";

interface TodoItemProps {
  id: number;
  name: string;
  age: number;
}

const TodoItem: React.FC<TodoItemProps> = ({ name, age }) => {
  return (
    <li className="todo-item">
      {name} - Age: {age}
    </li>
  );
};

export default TodoItem;
