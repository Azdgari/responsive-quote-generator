import { ReactComponent as RefreshIcon } from './icon-refresh.svg';
import './refresh-button.css';

const RefreshButton = () => {
  return (
    <button className="refresh">
      <RefreshIcon className="refresh-icon" />
    </button>
  )
}

export default RefreshButton;