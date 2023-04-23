import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { add, remove, update } from "./store/Users";

function App() {
  //selecting the store using the useSelector hook
  //A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.
  //users=>we are getting from the initialState object in the users.js file
  const users = useSelector((state) => state.users.users);
  //here we are selecting the users which is inside the configure store and selecting the users which is the initial state
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const addUser = (e) => {
    e.preventDefault();
    console.log(id, username);
    dispatch(add({ id: id, username: username }));
  };
  return (
    <div className="App">
      <Container className="mt-5">
        <h3 className="text-center">CRUD OPERATIONS USING REDUX TOOLKIT</h3>
        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>User Id</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>
                  <button className="btn btn-md btn-success" onClick={()=>dispatch(update({ id: u.id, username: "update" }))}>Update</button>
                </td>
                <td>
                  <button className="btn btn-md btn-danger" onClick={()=>dispatch(remove(u.id))}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="w-50 mt-5">
          <label>User ID:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setId(e.target.value)}
            value={id}
          ></input>
          <br></br>
          <br></br>
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
          <br></br>
          <br></br>
          <button className="btn btn-md btn-primary" onClick={addUser}>
            Add
          </button>
        </div>
      </Container>
    </div>
  );
}

export default App;
