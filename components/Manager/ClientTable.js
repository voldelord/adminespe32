import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useRouter } from "next/router"; // Asegúrate de tener esta importación

const ClientTable = () => {
  const router = useRouter(); // Asegúrate de tener esta declaración

  const handleEditClick = () => {
    // Navegar a la página de edición
    router.push("/managercreate");
  };
  return (
    <div className="container bg-white w-full rounded-md shadow-lg">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr className="bg-gray-200 rounded-sm">
              <Th>ID</Th>
              <Th>Image</Th>
              <Th>Device</Th>
              <Th>Name</Th>
              <Th>Mail</Th>
              <Th>Phone</Th>
              <Th>Edit</Th>
              <Th>Status</Th>
              <Th>Rol</Th>
              <Th>Search</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>1</Td>
              <Td>Image</Td>
              <Td>Usuario</Td>
              <Td>mail@mail.com</Td>
              <Td>+558488599</Td>
              <Td>icon</Td>
              <Td>Active</Td>
              <Td>Admin</Td>
              <Td>
                <Box
                  display="flex"
                  gap={2}
                  cursor="pointer"
                  onClick={handleEditClick}
                >
                  <AiFillEdit />
                  <BsTrash />
                </Box>
              </Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>1</Td>
              <Td>Image</Td>
              <Td>Usuario</Td>
              <Td>mail@mail.com</Td>
              <Td>+558488599</Td>
              <Td>icon</Td>
              <Td>Active</Td>
              <Td>Admin</Td>
              <Td>
                <Box
                  display="flex"
                  gap={2}
                  cursor="pointer"
                  onClick={handleEditClick}
                >
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

export default ClientTable;
