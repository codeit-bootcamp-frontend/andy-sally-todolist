// <ToDoListItem />
function ToDoListItem({ id, content, onDelete }) {
  function handleDeleteItem() {
    onDelete(id);
  }

  return (
    <li id={id}>
      <button />
      {content}
      <button onClick={handleDeleteItem} />
    </li>
  );
}

// <ToDoListItem id={id} content={} onDelete={onDelete}/>
export default ToDoListItem;
