import { useState } from "react";
import { uid } from "uid";
import "./App.css";

function App() {
  const [activities, setActivities] = useState("");
  function handleAddActivity(activity) {
    setActivities({ activity, id: uid() });
  }
  console.log(uid);
  return (
    <>
      <form className="form">
        <h2>Add new Activity</h2>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" value="" />
        <label htmlFor="activity">Good weather Activity:</label>
        <input id="activity" type="checkbox" name="activity" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
