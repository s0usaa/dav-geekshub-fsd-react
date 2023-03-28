import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminUsers } from "../adminUsers/AdminUsers";
import { AppointmentDr } from "../appointmentDr/AppointmentDr";
import { AppointmentWeb } from "../appointmentWeb/AppointmentWeb";
import { Detail } from "../detail/Detail";
import { Home } from "../home/Home";
import { Login } from "../login/Login";
import { NewAppointment } from "../newappointment/NewAppointment";
import { Profile } from "../profile/Profile";
import { Register } from "../register/Register";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appointmentweb" element={<AppointmentWeb />} />
        <Route path="/appointmentDr" element={<AppointmentDr />} />
        <Route path="/appointment/create" element={<NewAppointment />} />
        <Route path="/users" element={<AdminUsers />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
};
