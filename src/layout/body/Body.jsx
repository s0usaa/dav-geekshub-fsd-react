import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminUsers } from "../adminUsers/AdminUsers";
import { AppointmentWeb } from "../appointmentWeb/AppointmentWeb";
import { Detail } from "../detail/Detail";
import { Home } from "../home/Home";
import { Login } from "../login/Login";
import { Profile } from "../profile/Profile";
import { Register } from "../register/Register";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/"/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/appointmentweb" element={<AppointmentWeb/>} />
        <Route path="/users" element={<AdminUsers/>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </>
  );
};
