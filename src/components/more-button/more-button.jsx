import './more-button.css'
import { ReactComponent as MoreIcon } from './icon-arrow-down.svg';
import { useEffect, useState } from 'react';

const MoreButton = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [locationString, setLocationString] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [dayOfYear, setDayOfYear] = useState('');
  const [weekNumber, setWeekNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        if (!response.ok) {
          throw new Error('Error fetching time');
        }
        const data = await response.json();
        const locationString = data.timezone;
        const dayOfWeek = data.day_of_week;
        const dayOfYear = data.day_of_year;
        const weekNumber = data.week_number;

        setLocationString(locationString);
        setDayOfWeek(dayOfWeek);
        setDayOfYear(dayOfYear);
        setWeekNumber(weekNumber);

      } catch (error) {
        console.log(error);
        setLocationString('Error fetching location');
      }
    };
    fetchData();
  }, []);

  const handleMoreButtonClick = () => {
    setShowMoreInfo(!showMoreInfo);
    const background = document.querySelector('.background');
    const upperContainer = document.querySelector('.upper-container');
    const clockContainer = document.querySelector('.clock-container');
    if (background) {
      background.style.gap = showMoreInfo ? '' : '30px';
      upperContainer.style.display = showMoreInfo ? '' : 'none';
      clockContainer.style.marginBottom = showMoreInfo ? '' : '90px';
    }
  };

  return (
    <div>
      <button className="more-button" onClick={handleMoreButtonClick}>
        <div className="more-button-text">{showMoreInfo ? 'LESS' : 'MORE'}</div>
        <MoreIcon className="more-icon" />
      </button>
      {
        showMoreInfo && (
          <div className={`more-info ${showMoreInfo ? 'show' : ''}`}>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Current Timezone</h3>
              <p className="more-info-item-text">{locationString}</p>
            </div>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Day of the Year</h3>
              <p className="more-info-item-text">{dayOfYear}</p>
            </div>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Day of the Week</h3>
              <p className="more-info-item-text">{dayOfWeek}</p>
            </div>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Week Number</h3>
              <p className="more-info-item-text">{weekNumber}</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MoreButton