import { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [createdDate] = useState(new Date());
  const [list, setList] = useState([]);

  function makePrettyDate(date) {
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  function addListItem(inputObject) {
    if (!inputObject.content) return;
    setList([...list, inputObject]);
  }

  function deleteListItem(id) {
    const nextList = list.filter((object) => object.id !== id);
    setList(nextList);
  }

  function checkListItem(id) {
    const nextList = list.map((item) => {
      if (item.id === id) {
        if (item.isDone === false) {
          return { ...item, isDone: true };
        } else {
          return { ...item, isDone: false };
        }
      }
    });
    setList(nextList);
  }

  return (
    <>
      <Header createdDate={makePrettyDate(createdDate)} />
      <ToDoInput onAdd={addListItem} />
      <ToDoList list={list} onDelete={deleteListItem} onCheck={checkListItem} />
    </>
  );
}

export default App;
