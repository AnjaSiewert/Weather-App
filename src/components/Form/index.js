import "./Form.css";

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
    <div className="form__container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__header">Add new Activity</h2>
        <label className="label" htmlFor="name">
          Name:
          <input className="input" id="name" type="text" name="name" />
        </label>
        <label className="label" htmlFor="activity">
          Good weather Activity:{" "}
          <input
            className="checkbox"
            id="activity"
            type="checkbox"
            name="isForGoodWeather"
          />
        </label>

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
