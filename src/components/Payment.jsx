import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "./Footer";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

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
          <h3
            style={{
              textTransform: "capitalize",
              fontFamily: " Karla, sans-serif",
            }}
          >
            transactions
          </h3>
          <div
            className="bell-icon"
            // style={{ display: "flex", alignItems: "center", gap: "1.5em" }}
          >
            {/* <FontAwesomeIcon icon={faGear} style={{ fontSize: "20px" }} /> */}
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="payment-balance">
          <p>portfolio balance</p>
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
