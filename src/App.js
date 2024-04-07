import "./App.css";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    if (!text.trim()) return alert("Invalid text");
    e.preventDefault();
    let user = {
      text,
    };
    setData([...data, user]);
    setText("");
  };
  let users = data?.map((u, inx) => {
    return (
      <div key={inx} className="list">
        <p>{u.text}</p>
        <RiDeleteBin6Line />
      </div>
    );
  });
  return (
    <div className="main">
      <form onSubmit={handleSubmit} action="">
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
          required
        />
        <button type="submit">Add</button>
      </form>
      <div>{users}</div>
    </div>
  );
}

export default App;
