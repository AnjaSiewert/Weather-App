export default function Header({ emoji, temperature }) {
  return (
    <h1>
      {emoji} {temperature}°C
    </h1>
  );
}
