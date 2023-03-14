import { useState, useEffect } from "react";
import { uid } from "uid";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activites", {
    defaultValue: [],
  });

  //const [activities, setActivities] = useState([]);

  // Fetching
  const WEATHER_URL = "https://example-apis.vercel.app/api/weather/europe";
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(WEATHER_URL);
        const data = await response.json();
        if (response.ok) {
          setWeather(data);
        } else {
          console.error("fetch failed!");
        }
      } catch (error) {
        console.error(error);
      }
    }
    loadWeather();
  }, []);

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

  function handleDeleteActivity(activityToDelete) {
    setActivities(
      activities.filter((activity) => activity.id !== activityToDelete)
    );
  }

  return (
    <>
      <Header emoji={weather.condition} temperature={weather.temperature} />
      <List
        activities={activities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
