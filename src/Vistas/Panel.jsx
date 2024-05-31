import React from 'react';

export function Panel(){
  const tickets = [
    { codigo: "123459", fecha: "18/04/2023", aula: "T6", grupo: "DAW1", ordenador: "PC3", descripcion: "Error de impresora", alumno: "Ana Martínez" },
    { codigo: "123460", fecha: "19/04/2023", aula: "T8", grupo: "DAW2", ordenador: "PC4", descripcion: "Problema de acceso a archivos", alumno: "Pedro Gómez" },
    { codigo: "123461", fecha: "20/04/2023", aula: "T6", grupo: "DAW1", ordenador: "PC1", descripcion: "Aplicación se cierra inesperadamente", alumno: "Sofía Fernández" },
    { codigo: "123462", fecha: "21/04/2023", aula: "T7", grupo: "DAW2", ordenador: "PC2", descripcion: "Problema de conexión a la red", alumno: "Luis Torres" },
    { codigo: "123463", fecha: "22/04/2023", aula: "T8", grupo: "DAW1", ordenador: "PC3", descripcion: "Archivos corruptos", alumno: "Carolina Ramírez" },
  ];

  const resolvedTickets = [
    { codigo: "123457", fecha: "16/04/2023", fechaResuelto: "15/05/2023", aula: "T7", grupo: "DAW2", ordenador: "PC1", descripcion: "Problema de conexión a Internet", alumno: "Maria López" },
    { codigo: "123458", fecha: "17/04/2023", fechaResuelto: "15/05/2023", aula: "T8", grupo: "DAW1", ordenador: "PC2", descripcion: "Pantalla en blanco", alumno: "Juan Rodríguez" },
    { codigo: "123459", fecha: "18/04/2023", fechaResuelto: "15/05/2023", aula: "T8", grupo: "DAW1", ordenador: "PC3", descripcion: "Error de impresora", alumno: "Ana Martínez" },
  ];

  return (
    <div>
        <h2 className="mt-5">Tickets pendientes</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.codigo}</td>
              <td>{ticket.fecha}</td>
              <td>{ticket.aula}</td>
              <td>{ticket.grupo}</td>
              <td>{ticket.ordenador}</td>
              <td>{ticket.descripcion}</td>
              <td>{ticket.alumno}</td>
              <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td>
                <button className="btn btn-warning" title="Añadir comentario">
                  <i className="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</i>
                </button>
              </td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text">Comentar</i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3">Borrar</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="mt-5">Tickets resueltos</h2>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Fecha resuelto</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {resolvedTickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.codigo}</td>
              <td>{ticket.fecha}</td>
              <td>{ticket.fechaResuelto}</td>
              <td>{ticket.aula}</td>
              <td>{ticket.grupo}</td>
              <td>{ticket.ordenador}</td>
              <td>{ticket.descripcion}</td>
              <td>{ticket.alumno}</td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text">Editar</i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3">Borrar</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

