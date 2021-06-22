import {useState, useEffect} from 'react'
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const availabilityUrl = "https://minihackspace.azurewebsites.net/availability/"

function App() {

  const [selectedDate, onChange] = useState(new Date());
  const [dateAvailability, setDateAvailability] = useState(undefined);
  //console.log(value)

  console.log(selectedDate.getDay())

  function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }

  useEffect(()=> {
    fetch(`${availabilityUrl}${convertDate(selectedDate)}`)
    .then(response => {                      // first then()
      if(response.ok)
      {
        return response.text();         
      }

      throw new Error('Something went wrong.');
    }) 
    .then(dateAvailable => {
        if(dateAvailable === "true") {
          setDateAvailability("available")
        } else {
          setDateAvailability("unavailable")
        }
      },
    )
    .catch(error => setDateAvailability("error"))
  }, [selectedDate])

  // let valueStr = convertDate(value);
  // console.log(valueStr);
  return (
    <div className="App">
      <Calendar
        onChange={onChange}
        value={selectedDate}
      />
      <h1>{convertDate(selectedDate)}</h1>
      <h2>{dateAvailability}</h2>

      {dateAvailability === "available" && (
        <img src="https://media.giphy.com/media/1n4FT4KRQkDvK0IO4X/giphy.gif" width="400px"/>
      )}
      {dateAvailability === "unavailable" && (
        <img src="https://media.giphy.com/media/likpk3Ek9ycFtade8/giphy.gif" width="400px"/>
      )}
      {dateAvailability === "error" && (
        <img src="https://media.giphy.com/media/l0MYx2rhu3WL5fUd2/giphy.gif" width="400px"/>
      )}
    </div>
  );
}

export default App;
