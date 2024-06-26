import React, { useState, useEffect } from 'react';

export function TablaPendientes() {
  const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    fetch('https://json-rho-olive.vercel.app/tickets')
      .then(response => response.json())
      .then(data => {
        const pendientes = data.ticketsPendientes;
        const ticketsOrdnadosPendientes = pendientes.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        setTicketsData(ticketsOrdnadosPendientes);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
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
        {ticketsData.map((ticket, index) => (
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
                <i className="bi bi-chat-left-text">Comentarios</i>
              </button>
            </td>
            <td>
              <button className="btn btn-danger" title="Eliminar ticket">
                <i className="bi bi-trash3">Eliminar</i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
