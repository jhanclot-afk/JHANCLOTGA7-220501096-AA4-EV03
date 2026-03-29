import React, { useState } from "react";
//aqui se encuentra las funciones (logica)
function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (correo === "jhanclot@gmail.com" && password === "1234") {
      alert("Login correcto");
    } else {
      alert("Datos incorrectos");
    }
  };
//aqui se crean los cubiculos donde se ingresa la info y el boton
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Ingrese su Correo"
        onChange={(e) => setCorreo(e.target.value)}
      />

      <input
        type="password"
        placeholder="Ingrese su Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;