import { Routes, Route } from "react-router-dom";
import { ReactElement } from "react";

import AuthProtected from "@/components/protected/authProtected";

import Login from "@/pages/dashboard/Login"
import Register from "@/pages/dashboard/Register";
import Dashboard from "@/pages/dashboard/index"

import CarsData from "@/pages/dashboard/cars/CarsData";
import CarsFormCreate from "@/pages/dashboard/cars/CarsFormCreate";
import CarsFormEdit from "@/pages/dashboard/cars/CarsFormEdit";
import CarsLogs from "@/pages/dashboard/cars/CarsLogs";
import CarsLogsDetail from "@/pages/dashboard/cars/CarsLogsDetail";

import UsersData from "@/pages/dashboard/users/UsersData";
import UsersFormCreate from "@/pages/dashboard/users/UsersFormCreate";
import UsersFormEdit from "@/pages/dashboard/users/UsersFormEdit";

import LayoutLanding from "@/components/landing/Layout";
import Landing from "@/pages/landing/index";
import CarsFilter from "@/pages/landing/CarsFilter"

import $ from "jquery";
(window as any).$ = $;

export default function App(): ReactElement {
  return (
    <>
      <Routes>
        <Route path="/" Component={LayoutLanding}>
          <Route index Component={Landing} />
          <Route path="cars" Component={CarsFilter} />
        </Route>

        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />

        <Route path="/dashboard">
          <Route index Component={Dashboard} />

          <Route path="cars">
            <Route index Component={CarsData} />
              <Route path="create" element={
                <AuthProtected role={["SUPERADMIN", "ADMIN"]}>
                  <CarsFormCreate />
                </AuthProtected>
              } />
              <Route path="edit/:id" element={
                <AuthProtected role={["SUPERADMIN", "ADMIN"]}>
                  <CarsFormEdit />
                </AuthProtected>
              } />
            <Route path="logs" element={
              <AuthProtected role={["SUPERADMIN", "ADMIN"]}>
                <CarsLogs />
              </AuthProtected>
            } />
            <Route path="logs/detail/:id" element={
              <AuthProtected role={["SUPERADMIN", "ADMIN"]}>
                <CarsLogsDetail />
              </AuthProtected>
            } />
          </Route>

          <Route path="users">
              <Route index element={
                <AuthProtected role={["SUPERADMIN"]}>
                  <UsersData />
                </AuthProtected>
              } />
              <Route path="create" element={
                <AuthProtected role={["SUPERADMIN"]}>
                  <UsersFormCreate />
                </AuthProtected>
              } />
              <Route path="edit/:id" element={
                <AuthProtected role={["SUPERADMIN"]}>
                  <UsersFormEdit />
                </AuthProtected>
              } />
          </Route>
        </Route>
      </Routes>
    </>
  );
}