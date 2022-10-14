import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "kaka Aziz",
    email: "Kaka.Aziz@gmail.com"
  },
  {
    id: "2",
    name: "Yahya",
    email: "Yahya@gmail.com"
  },
  {
    id: "3",
    name: "Mansoor",
    email: "Mansoor@gmail.com"
  },
  {
    id: "4",
    name: "Morad",
    email: "Morad@gmail.com"
  },
]

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find(user => user.id === id);
      if(existingUser) {
        return state.filter(user => user.id !== id);
      }
    }
  }
})

export const { addUser, editUser, deleteUser } = userSlice.actions;


export default userSlice.reducer;