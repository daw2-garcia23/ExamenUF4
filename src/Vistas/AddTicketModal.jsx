import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function AddTicketModal({ isOpen, onClose }) {
  const [codigo, setCodigo] = useState('');
  const [fecha, setFecha] = useState('');
  const [aula, setAula] = useState('');
  const [grupo, setGrupo] = useState('');
  const [ordenador, setOrdenador] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [alumno, setAlumno] = useState('');

  const handleAddTicket = () => {
    console.log("Código:", codigo);
    console.log("Fecha:", fecha);
    console.log("Aula:", aula);
    console.log("Grupo:", grupo);
    console.log("Ordenador:", ordenador);
    console.log("Descripción:", descripcion);
    console.log("Alumno:", alumno);
    onClose(); 
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Añadir Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código" />
        <input type="text" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder="Fecha" />
        <input type="text" value={aula} onChange={(e) => setAula(e.target.value)} placeholder="Aula" />
        <input type="text" value={grupo} onChange={(e) => setGrupo(e.target.value)} placeholder="Grupo" />
        <input type="text" value={ordenador} onChange={(e) => setOrdenador(e.target.value)} placeholder="Ordenador" />
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
        <input type="text" value={alumno} onChange={(e) => setAlumno(e.target.value)} placeholder="Alumno" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleAddTicket}>Añadir</Button>
      </Modal.Footer>
    </Modal>
  );
}
