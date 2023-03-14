import "./Header.css";

export default function Header({ emoji, temperature }) {
  return (
    <h1 className="header">
      {emoji} {temperature}°C
    </h1>
  );
}
