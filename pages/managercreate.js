import React from "react";
import ClientTable from "../components/Manager/ClientTable";
import ManagerRegister from "../components/Manager/ManagerRegister";

const managercreate = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 mb-16">
      <ClientTable />
      <ManagerRegister />
    </div>
  );
};

export default managercreate;
