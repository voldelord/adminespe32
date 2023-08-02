import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import AuthenticationModal from "./AuthenticationModal";

const Authentication = () => {
  const [input1Value, setInput1Value] = useState("");
  const [isModalOpens, setIsModalOpens] = useState(false);

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleButton1Click = () => {
    setIsModalOpens(true); // Abre el modal al hacer clic en el botón
  };

  const handleCloseModal = () => {
    setIsModalOpens(false); // Cierra el modal al hacer clic en el botón de cierre o fuera del modal
  };
  return (
    <div className="bg-white rounded-md shadow-lg p-10 w-auto">
      <div className="flex mb-4">
        {/* Input 1 */}
        <Input
          value={input1Value}
          onChange={handleInput1Change}
          placeholder="Username"
          mr={2}
        />
        {/* Button 1 */}
        <Button colorScheme="green" onClick={handleButton1Click} mr={2}>
          <BsSearch size={20} />
        </Button>
        {/* Button 1 */}
        <Button colorScheme="green" onClick={handleButton1Click} mr={2}>
          <VscAdd size={20} />
        </Button>
      </div>

      <p className="font-bold text-xl mb-4">Clients</p>

      {/* Agregar el componente Modal */}
      <Modal isOpen={isModalOpens} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AddACL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Contenido del modal */}
            <AuthenticationModal />
          </ModalBody>
          <ModalFooter>
            {/* Agregar botones u otros elementos en el footer del modal si es necesario */}
            <Button colorScheme="green" mr={3} onClick={handleCloseModal}>
              Confirm
            </Button>
            <Button colorScheme="red" mr={3} onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr className="bg-gray-200 rounded-xl">
              <Th>Username</Th>
              <Th textAlign="right">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Device1</Td>
              <Td>
                <Box display="flex" justifyContent="flex-end" gap={2}>
                  <AiFillEdit />
                  <BsTrash />
                </Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Authentication;
