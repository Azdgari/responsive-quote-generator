import './more-button.css'
import { ReactComponent as MoreIcon } from './icon-arrow-down.svg';

const MoreButton = () => {
  return (
    <button className="more-button">
      <div className="more-button-text">MORE</div>
      <MoreIcon className="more-icon" />
    </button>
  )
}

export default MoreButton