import { useState, useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "./ToDoInput.css";

function ToDoInput({ onAdd }) {
  const idRef = useRef(0);
  const [value, setValue] = useState("");
  const [inputObject, setInputObject] = useState({});

  function handleChange(e) {
    setValue(e.target.value);
  }

  function an() {
    setInputObject((prevItem) => ({
      ...prevItem,
      id: idRef.current,
      content: value,
    }));
    console.log(inputObject);
  }

  function addListItem() {
    an();
    onAdd(inputObject);
    idRef.current += 1;
    setValue("");
  }

  return (
    <>
      <input type="text" placeholder="오늘의 할 일은?" value={value} onChange={handleChange} />
      <AiOutlinePlusCircle className="plusIcon" size={50} onClick={addListItem} />
    </>
  );
}

export default ToDoInput;
