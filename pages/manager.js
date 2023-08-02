import React from "react";
import CardInfo from "../components/Manager/CardInfo";
import { FaUserCircle } from "react-icons/fa";
import ClientTable from "../components/Manager/ClientTable";

const manager = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-5 mb-16">
        <div className="rounded-md bg-gradient-to-r from-white h-40 shadow-xl cursor-pointer">
          <CardInfo
            value={4}
            text="Clientes Totales"
            icon={<FaUserCircle color="yellow" />}
          />
        </div>
        <div className="rounded-md bg-gradient-to-r from-white h-40 shadow-xl cursor-pointer">
          <CardInfo
            value={4}
            text="Clientes Activos"
            icon={<FaUserCircle color="green" />}
          />
        </div>
        <div className="rounded-md bg-gradient-to-r from-white h-40 shadow-xl cursor-pointer">
          <CardInfo
            value={0}
            text="Clientes Bloqueados"
            icon={<FaUserCircle color="red" />}
          />
        </div>
      </div>
      <ClientTable />
    </div>
  );
};

export default manager;
