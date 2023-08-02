import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import React from "react";

const ManagerRegister = () => {
  return (
    <div className="bg-white rounded-md shadow-lg p-10 w-auto">
      <p className="mb-6 text-2xl font-bold">Add New User</p>
      <FormControl className="space-y-6">
        <FormLabel>Name</FormLabel>
        <Input placeholder="First name" />
        <FormLabel>Email</FormLabel>
        <Input placeholder="First name" />
        <FormLabel>Password</FormLabel>
        <Input placeholder="First name" />
        {/* Agregamos el Box con justifyContent="flex-end" para alinear el botón a la derecha */}
        <Box className="flex justify-end space-x-4">
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl">
            Create
          </button>
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl">
            Read Only
          </button>
        </Box>
      </FormControl>
    </div>
  );
};

export default ManagerRegister;
