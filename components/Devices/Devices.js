import React, { useState } from "react";
import { VscAdd } from "react-icons/vsc";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
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
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DevicesRegisterModal from "./DevicesRegisterModal";

const Devices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButton1Click = () => {
    setIsModalOpen(true); // Abre el modal al hacer clic en el botón
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal al hacer clic en el botón de cierre o fuera del modal
  };

  return (
    <div className="bg-white rounded-md shadow-lg p-10 w-auto">
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <Button
          colorScheme="green"
          size={"md"}
          onClick={handleButton1Click}
          mr={2}
        >
          <VscAdd size={20} />
        </Button>
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AddACL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Contenido del modal */}
            <DevicesRegisterModal />
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
              <Th>ClientID</Th>
              <Th>Topics</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Dispositivo1</Td>
              <Td>0/10</Td>
              <Td>
                <Button colorScheme="green" size={"md"} mr={2}>
                  Conectado
                </Button>
              </Td>
              <Td>
                <Box display="flex" gap={2}>
                  <AiFillEdit className="cursor-pointer overflow-hidden" />
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

export default Devices;
