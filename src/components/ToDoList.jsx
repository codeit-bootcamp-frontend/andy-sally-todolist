import ToDoListItem from "./ToDoListItem";
function ToDoList({ list, onDelete, onCheck }) {
  return (
    <ul>
      {list.map((item) => (
        <ToDoListItem key={item.id} id={item.id} isDone={item.isDone} content={item.content} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </ul>
  );
}

export default ToDoList;
