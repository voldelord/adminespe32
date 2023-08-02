import React from "react";
import CardConexions from "../components/Overview/CardConexions";
import Client from "../components/Overview/Client";
import Subscriptions from "../components/Overview/Subscriptions";

const overview = () => {
  return (
    <div>
      <CardConexions />
      <Client />
      <Subscriptions />
    </div>
  );
};

export default overview;
