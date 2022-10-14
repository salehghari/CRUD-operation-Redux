import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "./usersSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button";
import TextField from "../../components/TextField";

export default function AddUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: ""
  });
  const handleAddUser = () => {
    if(values.name && values.email) {
      dispatch(addUser(  {
        id: uuidv4(),
        name: values.name,
        email: values.email
      }))
      setValues({ name: "",email: "" });
      navigate("/");
    }
  }
  return (
    <div className="mt-3 mx-auto w-50">
      <TextField
        lable="Name"
        value={values.name}
        onChange={(e) => {setValues({ ...values, name: e.target.value })}}
        inputProps={{ type: "text", placeholder: "Kaka Aziz" }}
      />
      <br/>
      <TextField
        lable="Email"
        value={values.email}
        onChange={(e) => {setValues({ ...values, email: e.target.value })}}
        inputProps={{ type: "email", placeholder: "Kaka.Aziz@gmail.com" }}
      />
      <Button onClick={handleAddUser} className="primary-button py-2 px-4 rounded-1 my-4">
        Submit
      </Button>
    </div>
  )
}
