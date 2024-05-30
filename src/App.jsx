
import { Route, Routes } from "react-router-dom"
import { Header } from "./Componentes/Header"
import { Home } from "./Vistas/Home"
import { About } from "./Vistas/About"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Porsi } from "./Vistas/Porsi";
import { GlobalContextProvider } from "./GlobalContext/GlobalContext";


export default function App() {
  return (
  <GlobalContextProvider>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/porsi" element={<Porsi />}></Route>
      </Routes>
  </GlobalContextProvider>
  );
}
