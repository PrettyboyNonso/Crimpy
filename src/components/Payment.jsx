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
  const TransferComponent = () => {
    return (
      <div className="transfer-component">
        <div className="senderInitials">
          <h3>MJ</h3>
        </div>
        <div className="payment-description">
          <h4>funds transfer</h4>
          <p>fanbase and well-wishers gift</p>
        </div>
        <div className="amount-paid">
          <h4>+$350,000</h4>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="payment">
        <div className="header-app">
          <h3
            style={{
              textTransform: "capitalize",
              fontFamily: " Karla, sans-serif",
              fontSize: "17px",
            }}
          >
            transactions
          </h3>
          <div className="bell-icon">
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
            <h4> available balance</h4>
            <h4>$0.000</h4>
          </div>
          <div className="loader-div">
            <div className="inner-loader-div"></div>
          </div>
          {/* <p>available for withdrawal: $0.00</p> */}
        </div>
        <div className="buttons-pay">
          <button>withdraw</button>
          <button>visit market</button>
        </div>
        <div className="operations">
          <div className="operations-head">
            <h4>recent operations</h4>
          </div>
          <TransferComponent />
        </div>
      </div>
      <Footer />
    </>
  );
};
