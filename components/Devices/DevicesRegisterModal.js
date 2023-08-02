import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import React from "react";

const DevicesRegisterModal = () => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>ClientID</FormLabel>
        <Input placeholder="Name" />
        <FormLabel>Status</FormLabel>
        <Select>
          <option>Enabled</option>
          <option>Disabled</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default DevicesRegisterModal;
