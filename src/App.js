import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState({});

  function handleAddActivity(data, isChecked) {
    setActivities({
      name: data.name,
      isForGoodWeather: isChecked,
      id: uid(),
    });
  }

  console.log(activities);

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
