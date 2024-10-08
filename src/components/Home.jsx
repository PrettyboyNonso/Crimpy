import { faBell, faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendDown,
  faArrowTrendUp,
  faRightLeft,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";

export const Home = () => {
  const [assetState, setAssetState] = useState([]);

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const getCrypto = async (...ids) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-BFZ4VisezRhHydG8AwE61kVa",
      },
    };
    const assets = [];
    for (const id of ids) {
      try {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`;
        const response = await fetch(url, options);
        const data = await response.json();
        assets.push(data);
      } catch (error) {
        console.log(error);
      }
    }

    setAssetState(assets);
  };

  useEffect(() => {
    getCrypto("bitcoin", "ethereum", "binancecoin");
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

  function prependDollarSign(number) {
    let arr = [];
    arr.push(number?.toFixed(1)?.toString()?.split(""));
    const newArr = arr.flat(1);
    newArr.splice(1, 0, "$");
    const lastArr = newArr.join("");
    return lastArr;
  }

  const Assest = ({ crypto }) => {
    return (
      <div className="assets">
        <div className="assets-child">
          <div className="asset-name">
            <div className="asset-img">
              <img src={crypto?.image?.large} alt="" />
            </div>
            <div className="name-symbol">
              <h4>{crypto?.symbol}</h4>
              <p>{crypto?.name}</p>
            </div>
          </div>

          <div className="asset-graph">{/* <AssetGraph /> */}</div>
          <div className="asset-price">
            <h4>{`$${formatNumberWithCommas(
              crypto?.market_data?.current_price?.usd.toFixed(1)
            )}`}</h4>

            <p
              style={{
                color:
                  crypto?.market_data?.price_change_24h_in_currency?.usd > 0
                    ? "green"
                    : "red",
              }}
            >
              {Math.round(
                crypto?.market_data?.price_change_24h_in_currency?.usd * 10
              ) /
                10 >
              0
                ? `+$${crypto?.market_data?.price_change_24h_in_currency?.usd.toFixed(
                    1
                  )} (${crypto?.market_data?.price_change_percentage_24h?.toFixed(
                    1
                  )}%)`
                : `${prependDollarSign(
                    crypto?.market_data?.price_change_24h_in_currency?.usd
                  )} (${crypto?.market_data?.price_change_percentage_24h?.toFixed(
                    2
                  )}%)`}
            </p>
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
          <div className="withdraw-icon">
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

          <div className="withdraw-icon">
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
            assetState?.map((value, index) => <Assest crypto={value} />)
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
