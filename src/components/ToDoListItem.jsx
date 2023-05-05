import { MdOutlineCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";

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
        {isDone ? <MdOutlineCheckCircleOutline /> : <MdRadioButtonUnchecked />}
      </button>
      <input defaultValue={content} />
      <button onClick={handleDeleteItem}>X</button>
    </li>
  );
}

export default ToDoListItem;
