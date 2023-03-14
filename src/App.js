import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = false;
  function handleAddActivity(data, isChecked) {
    setActivities([
      ...activities,
      {
        name: data.name,
        isForGoodWeather: isChecked,
        id: uid(),
      },
    ]);
  }

  console.log(activities);

  return (
    <>
      <List activities={activities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
