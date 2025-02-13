import { useDrag } from "react-dnd";
import { Todo } from "../types";

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TODO",
    item: todo,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div ref={drag} className={`p-2 bg-white rounded shadow mb-2 ${isDragging ? "opacity-50" : ""}`}>
      <p>{todo.title}</p>
    </div>
  );
};

export default TodoItem;