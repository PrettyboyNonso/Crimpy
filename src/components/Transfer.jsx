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
      <div className="number-btns">
        <div className="btns">
          <h4>1</h4>
        </div>
        <div className="btns">
          <h4>2</h4>
        </div>
        <div className="btns">
          <h4>3</h4>
        </div>
        <div className="btns">
          <h4>4</h4>
        </div>
        <div className="btns">
          <h4>5</h4>
        </div>
        <div className="btns">
          <h4>6</h4>
        </div>
        <div className="btns">
          <h4>7</h4>
        </div>
        <div className="btns">
          <h4>8</h4>
        </div>
        <div className="btns">
          <h4>9</h4>
        </div>
        <div className="btns">
          <h4>0</h4>
        </div>
        <div className="btns">
          <h4>00</h4>
        </div>
        <div className="btns"></div>
      </div>

      <div className="withdraw-btn">
        <button>withdraw</button>
      </div>
    </div>
  );
};
