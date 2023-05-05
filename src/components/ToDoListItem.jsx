function ToDoListItem({ id, content, isDone, onDelete, onCheck }) {
  function handleDeleteItem() {
    onDelete(id);
  }

  function handleCheckItem() {
    onCheck(id);
  }

  return (
    <li className="todolist-item" id={id}>
      <button className="check-button" onClick={handleCheckItem}>
        {isDone ? "체크표시 아이콘" : "빈 동그라미"}
      </button>
      {content}
      <button onClick={handleDeleteItem}>X</button>
    </li>
  );
}

export default ToDoListItem;
