import { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";

function App() {
  const [createdDate] = useState(new Date());
  const [list, setList] = useState([]);

  function makePrettyDate(date) {
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  function addListItem(value) {
    if (!value) return;
    setList([...list, value]);
  }

  return (
    <>
      <Header createdDate={makePrettyDate(createdDate)} />
      <ToDoInput onAdd={addListItem} />
    </>
  );
}

export default App;
