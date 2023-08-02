import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const AuthenticationModal = () => {
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Username</FormLabel>
        <Input />
        <FormLabel>Password</FormLabel>
        <Input />
      </FormControl>
    </div>
  );
};

export default AuthenticationModal;
