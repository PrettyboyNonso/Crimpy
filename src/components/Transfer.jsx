import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Transfer = () => {
  return (
    <div className="transfer-compo">
      <div className="transfer-first-head">
        <div className="swipe-down"></div>
      </div>
      <div className="transfer-head-part">
        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "22px" }} />
        <div className="account-details">
          <h4>jessica wisconsin</h4>
          <div className="other-account-info">
            <p>wise</p>
            <div className="demarcate"></div>
            <p>111000025123456789</p>
          </div>
        </div>
      </div>
      <div className="input-non-clickable">
        <input type="text" disabled value="$ 900" />
        <p>
          available balance : <b>$350,000</b>
        </p>
      </div>
    </div>
  );
};
