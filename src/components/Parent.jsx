import React, { useContext } from "react";
import { Home } from "./Home";
import { Payment } from "./Payment";
import { Market } from "./Market";
import { Mycontext } from "../App";

export const Parent = () => {
  const { activComponentId } = useContext(Mycontext);
  return (
    <div>
      {activComponentId === "home" && <Home />}
      {activComponentId === "payment" && <Payment />}
      {activComponentId === "market" && <Market />}
    </div>
  );
};
