import { createContext, useState } from "react";
import bd from '../db.json';  // Asegúrate de que la ruta sea correcta

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [contadorClicks, setContadorClicks] = useState(0); //esto es de otra prácitca
  //He decidido crear dos tipos de estados, porque creo que me voy a manejar mejor entre tickets pendientes y tickets resueltos
  const [ticketsPendientes, setTicketsPendientes] = useState(); 
  const [ticketsResueltos, setTicketsResueltos] = useState();

  function clicks() {
    setContadorClicks(contadorClicks + 1);
    console.log(contadorClicks);
  }

  return (
    <GlobalContext.Provider value={{
      contadorClicks,
      setContadorClicks,
      clicks,
      ticketsPendientes,
      setTicketsPendientes,
      ticketsResueltos,
      setTicketsResueltos
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
