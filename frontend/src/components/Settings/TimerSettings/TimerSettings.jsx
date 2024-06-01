import React, { useState } from "react";
import axios from "axios";

const TimerSettings = () => {
  const initialSettings = {
    work: 25,
    break: 5,
    longbreak: 15, // Ensure initial values match input types
  };
  const [settings, setSettings] = useState(initialSettings);

  const backendURL = "http://localhost:3000/timersettings"; // Double-check URL accuracy

  const handleChange = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = parseInt(value.replace(/[^0-9]/g, ""), 10); // Input sanitization

    setSettings({
      ...settings,
      [name]: isNaN(sanitizedValue) ? initialSettings[name] : sanitizedValue, // Handle invalid input
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(backendURL, settings); // Send the actual settings object

      if (response.status === 200 || response.status === 201) {
        console.log("Settings saved successfully:", response.data);
      } else {
        console.error("Unexpected response:", response.status);
        // Consider displaying an error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors, potential CORS issues, etc.
    }
  };

  return (
    <div>
      <h1>Timer Settings</h1>
      <p>Recommended work: 25min, break: 5min, longbreak: 15min</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="work">Work (minutes):</label>
        <input
          type="number"
          name="work"
          id="work"
          value={settings.work}
          onChange={handleChange}
          min={1} // Set minimum value for validity
        />

        <br />

        <label htmlFor="break">Break (minutes):</label>
        <input
          type="number"
          name="break"
          id="break"
          value={settings.break}
          onChange={handleChange}
          min={1}
        />

        <br />

        <label htmlFor="longbreak">Long Break (minutes):</label>
        <input
          type="number"
          name="longbreak"
          id="longbreak"
          value={settings.longbreak}
          onChange={handleChange}
          min={1}
        />

        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TimerSettings;
