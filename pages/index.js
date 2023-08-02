// pages/index.js

import { useEffect } from "react";
import { useRouter } from "next/router";
import Login from "../components/Login/Login";

const Index = () => {
  const router = useRouter();

  // Redirigir a la página de inicio (login) al cargar la página
  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <div>
      <Login showNav={false} />
    </div>
  );
};

export default Index;
