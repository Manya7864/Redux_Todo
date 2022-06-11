import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../src/Component/Home";
import Navbar from "../src/Component/Navbar";
import TodoList from "../src/Component/TodoList";
import { RequiredAuth } from "./hoc/RequiredAuth";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/todo" element={<TodoList />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;