import { useState, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ToDoInput({ onAdd }) {
  const idRef = useRef(0);
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function addListItem() {
    const newTodoObject = {
      id: idRef.current,
      content: value,
    };
    onAdd(newTodoObject);
    idRef.current += 1;
    setValue("");
  }

  return (
    <div className="inputContainer">
      <input type="text" placeholder="오늘의 할 일은?" value={value} onChange={handleChange} />
      <AiOutlinePlusCircle className="plusIcon" size={50} onClick={addListItem} />
    </div>
  );
}

export default ToDoInput;
