
import { Route, Routes } from "react-router-dom"
import { Header } from "./Componentes/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContextProvider } from "./GlobalContext/GlobalContext";
import { Panel } from "./Vistas/Panel";
import { Login } from "./Vistas/Login";
import { Registro } from "./Vistas/Registro";


export default function App() {
  return (
  <GlobalContextProvider>
    <Header />
      <Routes>
        <Route path="/panel" element={<Panel/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/registro" element={<Registro />}></Route>
      </Routes>
  </GlobalContextProvider>
  );
}
