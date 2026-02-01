import "./App.css";

export default function Home({ onStart }) {
  return (
    <div className="page">
      <div className="window">
        <div className="window-bar">
          <span />
          <span />
          <span />
        </div>

        <h1>Welcome 👋</h1>
        <p>This is my first website built with React.</p>

        <button onClick={onStart}>
          <span>Go to Form</span>
        </button>
      </div>
    </div>
  );
}
