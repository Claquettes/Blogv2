import Spinner from "react-bootstrap/Spinner";
import "./styles/CustomSpinner.css";

function YourComponent() {
  return (
    <div className="spinner-container">
      <div className="custom-spinner">
        <Spinner animation="border" />
      </div>
    </div>
  );
}

export default YourComponent;
