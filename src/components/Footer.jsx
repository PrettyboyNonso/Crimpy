import {
  ArrowsRightLeftIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/16/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";

export const Footer = () => {
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
        <ArrowsRightLeftIcon className="middleBtn" />
      </div>
      <div className="footer-icon">
        <PresentationChartLineIcon className="homeBtn" />
        <p>market</p>
      </div>
      <div className="footer-icon">
        <Cog6ToothIcon className="homeBtn" />
        <p>settings</p>
      </div>
    </footer>
  );
};
