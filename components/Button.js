import "../styles/button.module.css";

export default function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
