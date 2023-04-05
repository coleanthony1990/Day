
import { useEffect, useState } from "react";
import './App.css';
import City from './components/City';
import Colors from './components/Colors';

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('')
  const [userLocation, setUserLocation] = useState({});


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation(position.coords);
      
    });
  }, []);

  useEffect(() => {
    if (userLocation) {
      
      fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userLocation.latitude},${userLocation.longitude}?key=4W7R6KHFXTA5YECCKYQH63LN5`
      )
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((error) => console.log(error));
    }
    if (userLocation) {
      fetch(
       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&localityLanguage=en`
      )
      .then(res => res.json())
      .then(res => setCity(res))
      .catch((error) => console.log(error))
    }
  }, [userLocation]);
  

  return (
    <div className="App">
      <Colors data={data}/>
      <City city={city}/>
    </div>
  );
}

export default App;
