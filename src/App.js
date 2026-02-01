import { supabase } from "./supabase";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { error } = await supabase.from("users").insert([
    {
      first_name,
      last_name,
      email,
      phone,
    },
  ]);

  if (error) {
    console.error(error);
    alert("Error: " + error.message);
  } else {
    alert("Submitted successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  }
};

  return (
    <div className="page">
      <div className="retro-left" />
      <div className="retro-right" />

      <div className="window">
        <div className="window-bar">
          <span />
          <span />
          <span />
        </div>

        <h1>Form</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
