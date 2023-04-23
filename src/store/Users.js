import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      username: "ajay"
    }
  ]
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state, action) => {
      state.users = [
        ...state.users,
        {
          id: action.payload.id,
          username: action.payload.username
        }
      ];
    },
    remove: (state, action) => {
      state.users=state.users.filter(u=>u.id!==action.payload);
    },
    update: (state, action) => {
     state.users=state.users.map(u=>{
      if(u.id===action.payload.id){
        u.username=action.payload.username
        u.id=action.payload.id
      }
      return u;
     })
    }
  }
});

//exporting the reducers and actions
export const { add, remove, update } = userSlice.actions;
export default userSlice.reducer;
