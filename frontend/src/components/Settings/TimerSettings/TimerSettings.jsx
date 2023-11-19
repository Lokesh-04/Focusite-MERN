import {React, useState} from "react";
import axios from "axios";

const backendUrl = "/api/timersettings";

const TimerSettings = () => {
  return (
    <div>
      <h1>Timer Settings</h1>
      <p>
        Recommended work: 25min, break: 5min, longbreak: 15min</p>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="work"
          onChange={handleInput}
          value={formData.work}
          id="work"
        />

        <br />

        <input
          type="number"
          name="break"
          onChange={handleInput}
          value={formData.break}
          id="break"
        />

        <br />

        <input
          type="number"
          name="longbreak"
          onChange={handleInput}
          value={formData.longbreak}
          id="longbreak"
        />

        <br />

        <button type="submit">Save</button>
      </form> */}


  {/* <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="data"
            onChange={handleInput}
            value={formData.data}
          />
          <button type="submit">Submit</button>
        </form>
      </div> */}

      </div>
  );
};

export default TimerSettings;
