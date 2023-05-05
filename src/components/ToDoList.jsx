import ToDoListItem from "./ToDoListItem";
function ToDoList({ list, onDelete }) {
  return (
    <div>
      {list.map((item) => (
        <ToDoListItem id={item.id} content={item.content} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ToDoList;
