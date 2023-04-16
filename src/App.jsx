import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    {
      task: "Milk the cat",
      completed: false,
      id: 1,
    },
  ]);

  function addTask(taskName) {
    console.log(taskName);
    const newTask = {
      task: taskName,
      completed: false,
      // uuidv generer bare noget unikt
      id: uuidv4(),
    };
    //add it to state
    setTasks((oldTasks) => oldTasks.concat(newTask));
    // takes the oldState and then returns the oldState with "newTask" added at the end
    // .concat adds to the end
  }

  function completeTask(id) {
    // modtaget et id i functionen, ser på hvis de forskeliige id'er er !== forskelligt fra det valgte, så skal den bruge state.
    // Hvis id'et er det samme som det valgte, så skal den forsvinde
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  // addTask = functionen addTask
  return (
    <div className="App">
      <Form addTask={addTask} />
      <List tasks={tasks} completeTask={completeTask} />
    </div>
  );
}

export default App;
