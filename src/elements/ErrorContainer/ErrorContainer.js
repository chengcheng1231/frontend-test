import './ErrorContainer.css';

const ErrorContainer = ({ errorText }) => {
  return (
    <div className="errorContainer">
      <div className="errorText">{errorText}</div>
    </div>
  );
};

export default ErrorContainer;
