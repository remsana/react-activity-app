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
    console.log(selectedOption);

    if (selectedOption == 1) {
      fetch("http://www.boredapi.com/api/activity?participants=1")
        .then((response) => response.json())
        .then((data) => setActivities(data));
    } else if (selectedOption == 2) {
      fetch("http://www.boredapi.com/api/activity?participants=2")
        .then((response) => response.json())
        .then((data) => setActivities(data));
    } else if (selectedOption == 4) {
      fetch("http://www.boredapi.com/api/activity?participants=4")
        .then((response) => response.json())
        .then((data) => setActivities(data));
    } else {
      fetch("http://www.boredapi.com/api/activity/")
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
        <option disabled selected >Choose no. of participants: </option>
        <option>Show any</option>
        <option>1</option>
        <option>2</option>
        <option>4</option>
      </select>
      <button onClick={fetchActivity}>Show Activity</button>
    </div>
  );
}

export default App;
