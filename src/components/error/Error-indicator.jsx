import './Error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="align-error-text">
      <img src={icon} alt="error-icon" />
      <h1>BOOM!</h1>
      <p>
        Something went terribly wrong, but we have already sent our droids to
        fix it!
      </p>
    </div>
  );
};

export default ErrorIndicator;
