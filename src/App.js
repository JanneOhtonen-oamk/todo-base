import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:3001/";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  return (
    <div>
      <h3>My tasks</h3>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
