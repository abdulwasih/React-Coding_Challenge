import "./styles.css";
import { useState } from "react";

export default function App() {
  const [topic, setTopic] = useState("");
  const [topicList, setTopicList] = useState([]);
  const handleSubmit = () => {};

  return (
    <div className="App">
      <h1>To do App</h1>
      <form>
        <input
          type="text"
          value={topic}
          onChange={(event) => {
            setTopic(event.target.value);
          }}
          placeholder="Enter the topic"
        ></input>
        <button>Add</button>
      </form>
      {topic}
    </div>
  );
}
