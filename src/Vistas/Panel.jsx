import React, { useState } from 'react';
import AddTicketModal from './AddTicketModal'; 
import { TablaPendientes } from '../Componentes/TablaPendientes';
import { TablaResueltos } from '../Componentes/TablaResueltos';

export function Panel() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Tickets Pendientes</h2>
      <TablaPendientes />
      <h2>Tickets Resueltos</h2>
      <TablaResueltos />
      <button
        onClick={openModal}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Añadir
      </button>
      <AddTicketModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
