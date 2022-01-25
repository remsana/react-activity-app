import "./App.css";
import Activity from "./Activity";
import { useState, useEffect } from "react";

function App() {
  const [activities, setActivities] = useState([]);

  // creating a function to fetch the activites
  let fetchActivity = () => {
    let optionsParticipants = document.querySelector("#optionsforParticipants");
    let selectedOption =
      optionsParticipants.options[optionsParticipants.selectedIndex].value;

    // console.log(selectedOption);
    // console.log(typeof selectedOption);

    if (selectedOption == "participants" || selectedOption == "any") {
      fetch("http://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((data) => setActivities(data));
    } else {
      fetch(
        `http://www.boredapi.com/api/activity?participants=${selectedOption}`
      )
        .then((response) => response.json())
        .then((data) => setActivities(data));
    }   
  };

  // Using UseEffect hook so there is always some info on the page when it is loaded
  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Random Activity Generator</h1>

      <Activity
        activities={activities.activity}
        type={activities.type}
        participants={activities.participants}
      />
      <select id="optionsforParticipants">
        <option disabled selected value="participants">
          {" "}
          Choose no. of participants:{" "}
        </option>
        <option value="any">Show any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="4">4</option>
      </select>
      <button onClick={fetchActivity}>Show Activity</button>
    </div>
  );
}

export default App;
