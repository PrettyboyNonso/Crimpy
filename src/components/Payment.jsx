import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "./Footer";

export const Payment = ({
  assetState,
  prependDollarSign,
  formatNumberWithCommas,
}) => {
  return (
    <>
      <div className="payment">
        <div
          className="header-app"
          style={{ paddingLeft: "1em", paddingRight: "1em" }}
        >
          <div className="paymenent-first-head">
            <div className="image-div-payment">
              <img
                src="/966-9665317_placeholder-image-person-jpg-removebg-preview.png"
                alt="user-picture"
              />
            </div>
            <h3> Jessica WD!</h3>
          </div>
          <div className="bell-icon">
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="payment-balance">
          <p>available balance</p>
          <h3>{`$${formatNumberWithCommas(
            (
              350000.65 +
              parseFloat(
                assetState[0]?.market_data?.price_change_24h_in_currency?.usd?.toFixed(
                  1
                ) || 0
              )
            ).toFixed(2)
          )}`}</h3>
        </div>
        <div className="transer-limit">
          <div className="transer-limit-head">
            <h4> transaction limit</h4>
            <h4>$20,000</h4>
          </div>
          <div className="loader-div">
            <div className="inner-loader-div"></div>
          </div>
          <p>spent $0.00</p>
        </div>
        <div className="buttons-pay">
          <button>withdraw</button>
          <button>visit market</button>
        </div>
        <div className="operations">
          <div className="operations-head">
            <h4>recent operations</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
