import React, { useContext } from 'react';
import { TablaPendientes } from '../Componentes/TablaPendientes';
import { TablaResueltos } from '../Componentes/TablaResueltos';


export function Panel(){


  return (
    <div>
        <h2>Tickets Pendientes</h2>
        <TablaPendientes />
        <h2>Tickets Resueltos</h2>
        <TablaResueltos />
    </div>
  );
}

