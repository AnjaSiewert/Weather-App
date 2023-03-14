import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(activity) {
    setActivities({ activity, id: uid() });
  }

  return <Form activities={activities} onAddActivity={handleAddActivity} />;
}

export default App;
