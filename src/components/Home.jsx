import { faBell, faChartBar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendUp,
  faRightLeft,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

export const Home = () => {
  const [assetState, setAssetState] = useState([]);
  const [graphDataState, setGraphDataState] = useState([]);
  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  // const getGraphData = async (...ids) => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       "x-cg-demo-api-key": "CG-BFZ4VisezRhHydG8AwE61kVa",
  //       mode: "no-cors",
  //     },
  //   };
  //   const graphData = [];
  //   for (const id of ids) {
  //     const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`;
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     graphData.push(data);
  //   }
  //   setGraphDataState(graphData);
  // };

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

  const AssetGraph = () => {
    const [chartData, setChartData] = useState({});
    useEffect(() => {
      const label = ["28th june", "29th June", "30 June", "1st July"];
      const prices = [56000, 56802, 67000, 89000];
      setChartData({
        labels: label,
        datasets: [
          {
            label: "Price in USD",
            data: prices,
            borderColor: "rgba(75, 192, 192, 1)",
            fill: false,
            tension: 0.1,
          },
        ],
      });
    }, []);

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
    };
    return (
      <div className="asset-graph-child">
        {Object.keys(chartData).length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    );
  };

  useEffect(() => {
    getCrypto("bitcoin", "ethereum", "binancecoin");
    // getGraphData("bitcoin", "ethereum", "binancecoin");
  }, []);

  const LoadingAsset = () => {
    return (
      <div className="assets">
        <div className="assets-div">
          <div className="assets-child">
            <div className="asset-img loading-asset-img"></div>
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

          <div className="asset-graph">
            <AssetGraph />
          </div>
          <div className="asset-price">
            <h4>{`$${formatNumberWithCommas(
              crypto?.market_data?.current_price?.usd
            )}`}</h4>
            {/* <p>{+$180 (0.9)%}</p> */}
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
                ? `+$${formatNumberWithCommas(
                    Math.round(
                      crypto?.market_data?.price_change_24h_in_currency?.usd *
                        10
                    ) / 10
                  )} `
                : `$${formatNumberWithCommas(
                    Math.round(
                      crypto?.market_data?.price_change_24h_in_currency?.usd *
                        10
                    ) / 10
                  )}`}
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
  ) : (
    <div className="smaller-device">
      <h1>Oops! This website can only be accessed on a mobile phone</h1>
    </div>
  );
};
