import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PrivateRoute } from "../loginMock/PrivateRoute";
import { RoleRoute } from "../loginMock/AcessoNegado";

import Layout from "../pages/Layout";

import ListaAeronaves from "../pages/aeronaves/ListaAeronaves";
import ListaUsuarios from "../pages/usuarios/ListaUsuarios";
import Login from "../pages/Login";
import CadastrarAeronave from "../pages/aeronaves/CadastrarAeronave";
import DetalhesAeronave from "../pages/aeronaves/DetalhesAeronave";
import EditarAeronave from "../pages/aeronaves/EditarAeronave";
import GerarRelatorio from "../pages/aeronaves/GerarRelatorio";
import CadastrarEtapa from "../pages/aeronaves/CadastrarEtapa";
import CadastrarPeca from "../pages/aeronaves/CadastrarPeca";
import CadastrarTeste from "../pages/aeronaves/CadastrarTeste";
import DetalhesEtapa from "../pages/aeronaves/DetalhesEtapa";
import DetalhesPeca from "../pages/aeronaves/DetalhesPeca";
import DetalhesTeste from "../pages/aeronaves/DetalhesTeste";
import CadastrarUsuario from "../pages/usuarios/CadastrarUsuario";
import DetalhesUsuario from "../pages/usuarios/DetalhesUsuario";
import EditarUsuario from "../pages/usuarios/EditarUsuario";
import AdicionarPeca from "../pages/aeronaves/AdicionarPecaAeronave";
import ListaRelatorios from "../pages/aeronaves/ListaRelatorios";
import DetalhesRelatorio from "../pages/aeronaves/DetalhesRelatorio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route
            path="/aeronaves"
            element={
              <PrivateRoute>
                <ListaAeronaves />
              </PrivateRoute>
            }
          />
          <Route
            path="/usuarios"
            element={
              <RoleRoute allowed={["admin"]}>
                <ListaUsuarios />
              </RoleRoute>
            }
          />
          <Route path="/relatorios" element={<ListaRelatorios />} />
          <Route path="/relatorios/:id" element={<DetalhesRelatorio />} />
          <Route path="/usuarios/cadastrar" element={<CadastrarUsuario />} />
          <Route path="/cadastrarPeca" element={<CadastrarPeca />} />
          <Route path="/usuarios/:id" element={<DetalhesUsuario />} />
          <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
          <Route path="/aeronaves/cadastrar" element={<CadastrarAeronave />} />
          <Route path="/aeronaves/:id" element={<DetalhesAeronave />} />
          <Route path="/aeronaves/editar/:id" element={<EditarAeronave />} />
          <Route path="/aeronaves/relatorio/:id" element={<GerarRelatorio />} />
          <Route
            path="/aeronaves/adicionarEtapa/:id"
            element={<CadastrarEtapa />}
          />
          <Route
            path="/aeronaves/adicionarPeca/:id"
            element={<AdicionarPeca />}
          />
          <Route
            path="/aeronaves/adicionarTeste/:id"
            element={<CadastrarTeste />}
          />
          <Route path="/etapas/:id" element={<DetalhesEtapa />} />
          <Route path="/pecas/:id" element={<DetalhesPeca />} />
          <Route path="/testes/:id" element={<DetalhesTeste />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
