import { faBell, faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendUp,
  faRightLeft,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const Home = () => {
  const Assest = () => {
    return <div className="assets">assets</div>;
  };
  const BalanceComponent = () => {
    return (
      <div className="balance-component">
        <div className="portfolio-balance">
          <p>portfolio balance</p>
          <h2>$375,000.65</h2>
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
      <Assest />
    </div>
  ) : (
    <div className="smaller-device">
      <h1>Oops! This website can only be accessed on a mobile phone</h1>
    </div>
  );
};
