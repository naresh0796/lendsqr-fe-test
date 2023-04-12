
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UserDetails from "./UserDetails";
import Users from "./Users";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />}  />
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}

export default Pages;
