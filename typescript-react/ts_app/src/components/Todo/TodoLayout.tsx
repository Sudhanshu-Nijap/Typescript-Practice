
import TodoItem from './TodoItem/TodoItem';
import './style2.css';

interface TodoItems {
  id: number;
  name: string;
  age: number;
}

interface TodoProps {
  items: TodoItems[];
}

const TodoLayout: React.FC<TodoProps> = ({ items }) => {
  return (
    <div className="todo-container">
      <ol>
        {items.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </ol>
    </div>
  );
};

export default TodoLayout;
