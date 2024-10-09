import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Asset } from "./Assets";
import { useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export const Market = ({
  assetState,
  prependDollarSign,
  formatNumberWithCommas,
}) => {
  const getGlobalMarket = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-BFZ4VisezRhHydG8AwE61kVa",
      },
    };
    try {
      const url = "https://api.coingecko.com/api/v3/global";
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGlobalMarket();
  }, []);
  const LoadingAsset = () => {
    return (
      <div className="assets">
        <div className="assets-div">
          <div className="assets-child">
            <div className="asset-img loading-asset-img">
              <p></p>
            </div>
            <div className="asset-name Loading-asset-name">
              <h4></h4>
              <p></p>
            </div>

            <div className="asset-graph loading-asset-graph"></div>
            <div className="asset-price loading-asset-price">
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="market">
        <div className="market-head">
          <div className="first-market-head">
            <h3>markets</h3>
            <p>keep tracks of the crypto market</p>
          </div>
          <div className="bell-icon">
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
          </div>
        </div>
        <div className="market-details">
          <div className="market-det">
            <p>vol. (24 hours):</p>
            <h3>$14,58B</h3>
          </div>
          <div className="market-det">
            <p>total cap:</p>
            <h3>$1,051T</h3>
          </div>
          <div className="market-det">
            <p>total currency:</p>
            <h3>9243</h3>
          </div>
          <div className="market-det">
            <p>dom currency:</p>
            <h3>BTC: 54.5%</h3>
          </div>
          <div className="market-det">
            <p style={{ height: "1.2em" }}></p>
            <h3>ETH: 12.6%</h3>
          </div>
          <div className="market-det">
            <p style={{ height: "1.2em" }}></p>
            <InformationCircleIcon
              style={{
                height: "1.5em",
                width: "1.5em",
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        <div className="assets-head">
          <h3>trending assets</h3>
        </div>
        <div className="asset-flex-div">
          {assetState.length === 0 ? (
            <>
              <LoadingAsset />
              <LoadingAsset />
              <LoadingAsset />
            </>
          ) : (
            assetState?.map((value, index) => (
              <Asset
                crypto={value}
                formatNumberWithCommas={formatNumberWithCommas}
                prependDollarSign={prependDollarSign}
              />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
