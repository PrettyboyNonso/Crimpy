import { ArrowsRightLeftIcon, Cog6ToothIcon } from "@heroicons/react/16/solid";
import { ChartPieIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Mycontext } from "../App";

export const Footer = () => {
  const { transferOpen, setTransferOpen } = useContext(Mycontext);

  return (
    <footer>
      <div className="footer-icon">
        <HomeIcon className=" active" />
        <p>home</p>
      </div>
      <div className="footer-icon">
        <BanknotesIcon className="homeBtn" />
        <p>payments</p>
      </div>
      <div className="footer-icon middleBtnDiv">
        <ArrowsRightLeftIcon
          className="middleBtn"
          onClick={() => setTransferOpen(!transferOpen)}
        />
      </div>
      <div className="footer-icon">
        <ChartPieIcon className="homeBtn" />
        <p>market</p>
      </div>
      <div className="footer-icon">
        <Cog6ToothIcon className="homeBtn" />
        <p>settings</p>
      </div>
    </footer>
  );
};
