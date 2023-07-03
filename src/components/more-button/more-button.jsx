import './more-button.css'
import { ReactComponent as MoreIcon } from './icon-arrow-down.svg';
import { useState } from 'react';

const MoreButton = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreButtonClick = () => {
    setShowMoreInfo(!showMoreInfo);
    const background = document.querySelector('.background');
    const upperContainer = document.querySelector('.upper-container');
    if (background) {
      background.style.gap = showMoreInfo ? '' : '0';
      upperContainer.style.display = showMoreInfo ? '' : 'none';
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
              <p className="more-info-item-text">Lorem ipsum dolor</p>
            </div>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Day of the Year</h3>
              <p className="more-info-item-text">Lorem ipsum dolor</p>
            </div>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Day of the Week</h3>
              <p className="more-info-item-text">Lorem ipsum dolor</p>
            </div>
            <div className="more-info-item">
              <h3 className="more-info-item-title">Week Number</h3>
              <p className="more-info-item-text">Lorem ipsum dolor</p>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MoreButton