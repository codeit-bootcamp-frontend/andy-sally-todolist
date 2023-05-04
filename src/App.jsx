import { useState } from "react";
import Header from "./components/Header";
import ToDoInput from "./components/ToDoInput";

function App() {
  const [createdDate] = useState(new Date());
  const [list, setList] = useState([]);

  function makePrettyDate(date) {
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <>
      <Header createdDate={makePrettyDate(createdDate)} />
      <ToDoInput />
    </>
  );
}

export default App;
