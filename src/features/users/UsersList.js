import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./usersSlice";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function UsersList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({
      id // id: id
    }));
  }

  const renderedUsers = users.map(user => (
    <div className="user-card p-3" key={user.id}>
      <div>
        <h3>{user.name}</h3>
        <span className="fw-light">{user.email}</span>
      </div>
      <div className="ms-auto">
        <Link to={`edit-user/${user.id}`}>
          <button className="icons-button edit-button p-1 ms-1 rounded-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon" aria-label="Edit user">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
          </button>
        </Link>
        <button onClick={() => handleRemoveUser(user.id)} className="icons-button delete-button p-1 ms-1 rounded-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon" aria-label="Remove user">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    <div className="w-75 mx-auto mt-4 p-3">
      <h1 className="title mt-2 mb-3">CRUD with <span>Redux</span> Toolkit</h1>
      <Link className="button-link" to="/add-user">
        <Button className="primary-button d-flex align-items-center py-2 px-4 rounded-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} style={{width: "18px", margin: "0 4px 0 -12px"}} stroke="currentColor" aria-label="Add user">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Add User
        </Button>
      </Link>
      <div className={users.length ? "users-list mt-3" : "d-flex justify-content-center"}>
        {
          users.length ? renderedUsers :
          <div className="alert-card alert alert-primary d-flex align-items-center mt-3 col-sm-8" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 me-2" style={{width: "22px"}} viewBox="0 0 24 24" stroke="#084298" strokeWidth={1.6} fill="transparent" role="img" aria-label="Info">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="m-0">
              You don't have any users yet, wanna <Link className="text-link" to="/add-user">add</Link> one?
            </p>
          </div>
        }
      </div>
    </div>
  )
}
