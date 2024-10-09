import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "./Footer";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Asset } from "./Assets";
import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export const Market = ({
  assetState,
  prependDollarSign,
  formatNumberWithCommas,
}) => {
  const [dataState, setDataState] = useState();
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
      setDataState(data);
    } catch (error) {
      console.log(error);
    }
  };

  function shortenNumber(value) {
    if (value >= 1e12) {
      return `$${(value / 1e12).toFixed(3)}T`; // Trillions
    } else if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(3)}B`; // Billions
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(3)}M`; // Millions
    } else if (value >= 1e3) {
      return `$${(value / 1e3).toFixed(3)}K`; // Thousands
    } else {
      return `$${value?.toLocaleString()}`; // Below 1000, format with commas
    }
  }

  useEffect(() => {
    getGlobalMarket();
  }, []);

  const LoadingMarket = () => {
    return <div className="loading-market"></div>;
  };
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
            {dataState ? (
              <h3>{`${shortenNumber(dataState?.data?.total_volume.usd)}`}</h3>
            ) : (
              <LoadingMarket />
            )}
          </div>
          <div className="market-det">
            <p>total cap:</p>
            {dataState ? (
              <h3>{`${shortenNumber(
                dataState?.data?.total_market_cap?.usd
              )}`}</h3>
            ) : (
              <LoadingMarket />
            )}
          </div>
          <div className="market-det">
            <p>total currency:</p>
            {dataState ? (
              <h3>{dataState?.data?.active_cryptocurrencies}</h3>
            ) : (
              <LoadingMarket />
            )}
          </div>
          <div className="market-det">
            <p>dom currency:</p>
            {dataState ? (
              <h3>{`BTC: ${dataState?.data?.market_cap_percentage?.btc.toFixed(
                2
              )}`}</h3>
            ) : (
              <LoadingMarket />
            )}
          </div>
          <div className="market-det">
            <p style={{ height: "1.2em" }}></p>
            {dataState ? (
              <h3>{`ETH: ${dataState?.data?.market_cap_percentage?.eth.toFixed(
                2
              )}`}</h3>
            ) : (
              <LoadingMarket />
            )}
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
