import { useState, useEffect } from 'react';

const CurrentLocation = () => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        if (!response.ok) {
          throw new Error('Error fetching time');
        }
        const data = await response.json();
        const locationString = data.timezone;
        const city = locationString.match(/[^/]+$/)[0];
        setLocation(city);
      } catch (error) {
        console.log(error);
        setLocation('Error fetching location');
      }
    };
    fetchData();
  }, []);

  return (
    <h2 className="location">
      In {location}
    </h2>
  );
};

export default CurrentLocation;
