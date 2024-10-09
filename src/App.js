import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home";
import { Market } from "./components/Market";

function App() {
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

  function prependDollarSign(number) {
    let arr = [];
    arr.push(number?.toFixed(1)?.toString()?.split(""));
    const newArr = arr.flat(1);
    newArr.splice(1, 0, "$");
    const lastArr = newArr.join("");
    return lastArr;
  }

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    getCrypto("bitcoin", "ethereum", "binancecoin");
  }, []);
  return (
    <div className="App">
      {/* <Home
        assetState={assetState}
        prependDollarSign={prependDollarSign}
        formatNumberWithCommas={formatNumberWithCommas}
      /> */}
      <Market
        assetState={assetState}
        prependDollarSign={prependDollarSign}
        formatNumberWithCommas={formatNumberWithCommas}
      />
    </div>
  );
}

export default App;
