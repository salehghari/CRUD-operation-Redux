import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "./usersSlice";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

export default function EditUser() {
  const users = useSelector((state) => state.users);
  const params = useParams();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, email } = existingUser[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name, // name: existingUser[0].name
    email // email: email.existingUser[0].email
  });

  const handleEditUser = () => {
    if(values.name && values.email) {
      dispatch(editUser({
        id: params.id,
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
      <Button onClick={handleEditUser} className="primary-button py-2 px-4 rounded-1 my-4 me-2">
        Edit
      </Button>
      <Button onClick={() => navigate("/")} className="cancel-button py-2 px-4 rounded-1 my-4 ms-2">
        Cancel
      </Button>
    </div>
  )
}