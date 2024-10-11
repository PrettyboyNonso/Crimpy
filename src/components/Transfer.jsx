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
            <p>19151232456789</p>
          </div>
        </div>
      </div>
      <div className="input-non-clickable">
        <div className="input-div">
          <p>$ 900</p>
        </div>
        <p className="transfer-balance">
          available balance : <b>$350,000</b>
        </p>
      </div>
    </div>
  );
};
