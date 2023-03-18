import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../home/Home";
import { Login } from "../login/Login";
import { Profile } from "../profile/Profile";
import { Register } from "../register/Register";

export const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
};
