import { FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter(); // Asegúrate de tener esta declaración

  const handleEditClick = () => {
    // Navegar a la página de edición
    router.push("/overview");
  };
  return (
    <div>
      <div className="container grid grid-cols-2">
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: "url('/iot.jpg')" }}
        ></div>
        <div className="flex flex-col justify-center items-center p-20 mt-40">
          <p className="font-semibold text-xl mb-8">Login Administrador</p>
          <FormControl className="space-y-10">
            <Input placeholder="Usuario" />
            <Input placeholder="Contraseña" />
          </FormControl>
          <button
            class="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 mt-10 rounded "
            onClick={handleEditClick}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
