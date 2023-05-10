import "./ToDoList.css";

import ToDoListItem from "./ToDoListItem";
function ToDoList({ list, onDelete, onCheck }) {
  return (
    <ul className="no-bullet">
      {list.map((item) => (
        <ToDoListItem key={item.id} id={item.id} isDone={item.isDone} content={item.content} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </ul>
  );
}

export default ToDoList;
