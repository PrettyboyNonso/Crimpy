import { faBell, faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendUp,
  faRightLeft,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const Home = () => {
  const [assetState, setAssetState] = useState([]);
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
      const url = `https://api.coingecko.com/api/v3/coins/${id}`;
      const response = await fetch(url, options);
      const data = await response.json();
      assets.push(data);
    }
    setAssetState(assets);
  };

  useEffect(() => {
    getCrypto("bitcoin", "ethereum", "binancecoin");
  }, []);
  const Assest = ({ crypto }) => {
    return (
      <div className="assets">
        <div className="assets-div">
          <div className="assets-child">
            <div className="asset-img">
              <img src={crypto?.image?.large} alt="" />
            </div>
            <div className="asset-name">
              <h4>{crypto?.symbol}</h4>
              <p>{crypto?.name}</p>
            </div>

            <div className="asset-graph"></div>
            <div className="asset-price">
              <h4>{`$${crypto?.market_data?.current_price?.usd}`}</h4>
              <p>+$180 (0.9)%</p>
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
          <h2>$350,000.65</h2>
          <div className="today-profit">
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              style={{ color: "green", fontSize: "18px" }}
            />
            <b>+$1,896</b>
            <p> today's profit</p>
          </div>
        </div>
        <div className="withdraw-part">
          <div className="withdraw-icon">
            <FontAwesomeIcon
              icon={faRightLeft}
              style={{ color: "white", fontSize: "18px" }}
            />
            <p>withdraw</p>
          </div>

          <div className="withdraw-icon">
            <FontAwesomeIcon
              icon={faChartBar}
              style={{ color: "white", fontSize: "18px" }}
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
    <div className="home">
      <div className="header-app">
        <div className="first-head-flex">
          <p>hello, al husni!</p>
          <h3>welcome to crimpy</h3>
        </div>
        <div className="bell-icon">
          <FontAwesomeIcon icon={faBell} style={{ fontSize: "20px" }} />
        </div>
      </div>
      <BalanceComponent />
      <div className="assets">
        <h4>assets</h4>
      </div>
      {assetState?.map((value, index) => (
        <Assest crypto={value} />
      ))}
    </div>
  ) : (
    <div className="smaller-device">
      <h1>Oops! This website can only be accessed on a mobile phone</h1>
    </div>
  );
};
