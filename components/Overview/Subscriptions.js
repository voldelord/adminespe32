import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Button,
} from "@chakra-ui/react";

const Subscriptions = () => {
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState("");

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleButton1Click = () => {
    // Add your logic for Button 1 click here
    console.log("Button 1 clicked");
  };

  const handleButton2Click = () => {
    // Add your logic for Button 2 click here
    console.log("Button 2 clicked");
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-10 w-auto mt-20">
      <div className="flex mb-4">
        {/* Input 1 */}
        <Input
          value={input1Value}
          onChange={handleInput1Change}
          placeholder="Input 1"
          mr={2}
        />

        {/* Input 2 */}
        <Input
          value={input2Value}
          onChange={handleInput2Change}
          placeholder="Input 2"
          mr={2}
        />

        {/* Button 1 */}
        <Button colorScheme="blue" onClick={handleButton1Click} mr={2}>
          <BsSearch size={40} />
        </Button>

        {/* Button 2 */}
        <Button colorScheme="green" onClick={handleButton2Click}>
          <RxUpdate size={40} />
        </Button>
      </div>

      <p className="font-bold text-xl mb-4">Subscriptions</p>

      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Subscriptions;
