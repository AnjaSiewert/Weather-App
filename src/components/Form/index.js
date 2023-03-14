export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const isChecked = event.target.elements.isForGoodWeather.checked;

    onAddActivity(data, isChecked);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />
      <label htmlFor="activity">Good weather Activity:</label>
      <input id="activity" type="checkbox" name="isForGoodWeather" />
      <button type="submit">Submit</button>
    </form>
  );
}
