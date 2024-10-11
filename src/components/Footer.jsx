import { ArrowsRightLeftIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Mycontext } from "../App";

export const Footer = () => {
  const {
    transferOpen,
    setTransferOpen,
    activComponentId,
    setActiveComponentId,
  } = useContext(Mycontext);

  const setActiveNav = (e) => {
    const clickedElemId = e.target.closest(".footer-icon")?.id;
    setActiveComponentId(clickedElemId);
  };

  return (
    <footer>
      <div className="footer-icon" id="home">
        <HomeIcon
          className=" homeBtn"
          onClick={(e) => setActiveNav(e)}
          style={{
            color:
              activComponentId === "home" ? "#002244" : "rgb(133, 133, 133)",
          }}
        />
        <p onClick={(e) => setActiveNav(e)}>home</p>
      </div>
      <div className="footer-icon" id="payment">
        <BanknotesIcon
          className="homeBtn"
          onClick={(e) => setActiveNav(e)}
          style={{
            color:
              activComponentId === "payment" ? "#002244" : "rgb(133, 133, 133)",
          }}
        />
        <p onClick={(e) => setActiveNav(e)}>payments</p>
      </div>
      <div className="footer-icon middleBtnDiv" id="transfer">
        <ArrowsRightLeftIcon
          className="middleBtn"
          onClick={() => setTransferOpen(!transferOpen)}
        />
      </div>
      <div className="footer-icon" id="market">
        <ChartPieIcon
          className="homeBtn"
          onClick={(e) => setActiveNav(e)}
          style={{
            color:
              activComponentId === "market" ? "#002244" : "rgb(133, 133, 133)",
          }}
        />
        <p onClick={(e) => setActiveNav(e)}>market</p>
      </div>
      <div className="footer-icon" id="setting">
        <Cog6ToothIcon className="homeBtn" />
        <p>settings</p>
      </div>
    </footer>
  );
};
