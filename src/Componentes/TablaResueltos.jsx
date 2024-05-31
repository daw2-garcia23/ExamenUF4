import React, { useState, useEffect } from 'react';

export function TablaResueltos(){
    const [ticketsData, setTicketsData] = useState([]);

  useEffect(() => {
    fetch('https://json-rho-olive.vercel.app/tickets')
      .then(response => response.json())
      .then(data => {
        const resueltos = data.ticketsResueltos;
        setTicketsData(resueltos);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
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
        {ticketsData.map((ticket, index) => (
          <tr key={index}>
            <td>{ticket.codigo}</td>
            <td>{ticket.fecha}</td>
            <td>{ticket.fecha_resuelto}</td>
            <td>{ticket.aula}</td>
            <td>{ticket.grupo}</td>
            <td>{ticket.ordenador}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.alumno}</td>
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
