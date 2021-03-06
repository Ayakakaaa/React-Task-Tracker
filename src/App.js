import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: "something1",
        day: "Feb 1th at 2pm",
        reminder: true,
    },
    {
        id:2,
        text: "something2",
        day: "Feb 2th at 2pm",
        reminder: true,
    },
    {
        id:3,
        text: "something3",
        day: "Feb 3th at 2pm",
        reminder: false,
    },
    {
        id:4,
        text: "something4",
        day: "Feb 4th at 2pm",
        reminder: true,
    }
  ])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
