export default function Form({ activities, onAddActivity }) {
  return (
    <form className="form">
      <h2>Add new Activity</h2>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" value="" />
      <label htmlFor="activity">Good weather Activity:</label>
      <input id="activity" type="checkbox" name="activity" />
      <button type="submit" onSubmit={onAddActivity}>
        Submit
      </button>
    </form>
  );
}
