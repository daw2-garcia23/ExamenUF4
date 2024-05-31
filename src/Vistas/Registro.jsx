import React, { useState } from 'react';

export function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <main className="container mt-5">
      <div className="pt-5">
        <h1 className="w-100 text-center">Registro</h1>
        <form
          action=""
          className="form p-4 border shadow bordered mt-5 mx-auto"
          style={{ width: '400px' }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="mt-2 form-label">User: </label>
          <input
            type="text"
            className="form-control"
            placeholder="usuario@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pass" className="mt-2 form-label">Contraseña: </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            className="mt-4 w-100 btn btn-primary"
            value="Entrar"
            id="enviar"
          />
        </form>
      </div>
    </main>
  );
}

export default Registro;
