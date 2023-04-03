// last 20 minutes decided to try in JS instead
import "./styles.css";

const today = new Date().getDate();
const baseUrl = "https://byabbe.se/on-this-day/12/21/births.json";
const endpointBirth = "births.json";
const endpointDeath = "deaths.json";
const endpointEvent = "events.json";

// prompt user for response
document.getElementById(
  "date_today"
).innerHTML = `December ${new Date().getDate()}`;

async function getData(number) {
  await fetch(baseUrl).then((res) => res.json());
}
const response = getData();
console.log(response);
