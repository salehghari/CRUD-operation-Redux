import "./style.css";
import UsersList from "./features/users/UsersList";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";
import NotFoundPage from "./components/NotFoundPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <UsersList /> } />
        <Route path="/add-user" element={ <AddUser /> } />
        <Route path="/edit-user/:id" element={ <EditUser /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}