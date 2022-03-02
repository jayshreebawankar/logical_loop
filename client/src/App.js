import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AddList from "./components/AddList";
import { TodoList } from "./components/TodoList";
import EditList from "./components/EditList";
import { NavBar } from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddList />} />
        <Route path="/edit/:id" element={<EditList />} />
      </Routes>
    </>
  );
};

export default App;
