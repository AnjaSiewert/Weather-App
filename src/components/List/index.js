export default function List({ activities, isGoodWeather }) {
  return (
    <ul>
      {activities.map((activity) => {
        return (
          activity.isForGoodWeather === isGoodWeather && (
            <li key={activity.id}>{activity.name} </li>
          )
        );
      })}
    </ul>
  );
}
