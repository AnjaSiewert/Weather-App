import "./List.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h2 className="list__header">
        {isGoodWeather
          ? "The weather is awesome/Go outside and:"
          : "Bad weather outside/Here's what you can do now:"}
      </h2>
      <ul className="list">
        {activities.map((activity) => {
          return (
            activity.isForGoodWeather === isGoodWeather && (
              <li className="listItem" key={activity.id}>
                {activity.name}{" "}
                <button
                  className="deleteButton"
                  type="button"
                  onClick={() => onDeleteActivity(activity.id)}
                >
                  Delete
                </button>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
}
