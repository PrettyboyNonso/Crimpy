import { faBell, faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Asset } from "./Assets";
import { Mycontext } from "../App";

export const Home = () => {
  const {
    assetState,
    prependDollarSign,
    formatNumberWithCommas,
    setTransferOpen,
    setActiveComponentId,
  } = useContext(Mycontext);
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

  const BalanceComponent = () => {
    return (
      <div className="balance-component">
        <div className="portfolio-balance">
          <p>portfolio balance</p>
          <h2>{`$${formatNumberWithCommas(
            (
              350000.65 +
              parseFloat(
                assetState[0]?.market_data?.price_change_24h_in_currency?.usd?.toFixed(
                  1
                ) || 0
              )
            ).toFixed(2)
          )}`}</h2>
          <div className="today-profit">
            <FontAwesomeIcon
              icon={
                assetState[0]?.market_data?.price_change_24h_in_currency?.usd >
                0
                  ? faArrowTrendUp
                  : faArrowTrendDown
              }
              style={{
                color: `${
                  assetState[0]?.market_data?.price_change_24h_in_currency
                    ?.usd > 0
                    ? "green"
                    : "red"
                }`,
                fontSize: "18px",
                backgroundColor: " rgb(27, 27, 27)",
              }}
            />
            <p>
              {assetState[0]?.market_data?.price_change_24h_in_currency?.usd > 0
                ? `$${assetState[0]?.market_data?.price_change_24h_in_currency?.usd}`
                : `${prependDollarSign(
                    assetState[0]?.market_data?.price_change_24h_in_currency
                      ?.usd
                  )}`}
            </p>
            <p> today's profit</p>
          </div>
        </div>
        <div className="withdraw-part">
          <div className="withdraw-icon" onClick={() => setTransferOpen(true)}>
            <FontAwesomeIcon
              icon={faRightLeft}
              style={{
                color: "white",
                fontSize: "18px",
                backgroundColor: "rgb(56, 56, 56)",
              }}
            />
            <p>withdraw</p>
          </div>

          <div
            className="withdraw-icon"
            onClick={() => setActiveComponentId("market")}
          >
            <FontAwesomeIcon
              icon={faChartBar}
              style={{
                color: "white",
                fontSize: "18px",
                backgroundColor: "rgb(56, 56, 56)",
              }}
            />
            <p>market</p>
          </div>
        </div>
      </div>
    );
  };
  // State to store whether it is a small device
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      const littleDevices = window.matchMedia("(max-width: 767px)");
      setIsSmallDevice(littleDevices.matches);
    };

    // Check screen size on load
    checkScreenSize();

    // Listen for changes in screen size
    window.addEventListener("resize", checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Conditional rendering based on screen size
  return isSmallDevice ? (
    <>
      <div className="home">
        <div className="header-app">
          <div className="first-head-flex">
            <p>hello, Jessica WD!</p>
            <h3>welcome to crimpy</h3>
          </div>
          <div className="bell-icon">
            <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
          </div>
        </div>
        <BalanceComponent />
        <div className="assets-head">
          <h3>assets</h3>
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
  ) : (
    <div className="smaller-device">
      <h1>Oops! This website can only be accessed on a mobile phone</h1>
    </div>
  );
};
