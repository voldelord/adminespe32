import React from "react";
import { Input, Select } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
const Settings = () => {
  return (
    <div className="bg-white rounded-md content-center  shadow-lg p-10 mb-10">
      <p className=" font-bold text-lg">MQTT Settings</p>
      <div className="grid grid-cols-2 mt-10 gap-y-5">
        <p>Mx Packet Size</p>
        <Input placeholder="Basic usage" />
        <p>Max QoS Allowed</p>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <p>Max Client ID Length</p>
        <Input placeholder="Basic usage" />
        <p>Max Topic Levels</p>
        <Input placeholder="Basic usage" />
        <p>Max Topic Alias</p>
        <Input placeholder="Basic usage" />
        <p>Allowed Wildcard Subscription</p>
        <Switch id="email-alerts" size={"lg"} colorScheme="green" />
        <p>Allowed Shared Subcription</p>
        <Switch id="email-alerts" size={"lg"} colorScheme="green" />
        <p>Allowed Exclusive Subcription</p>
        <Switch id="email-alerts" size={"lg"} colorScheme="green" />
        <p>Allowed Retain</p>
        <Switch id="email-alerts" size={"lg"} colorScheme="green" />
        <p>Ignore Loop Deliver</p>
        <Switch id="email-alerts" size={"lg"} colorScheme="green" />
      </div>
    </div>
  );
};

export default Settings;
