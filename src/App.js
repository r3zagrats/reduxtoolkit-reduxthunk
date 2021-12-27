import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../src/features/user/userSlice";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);

  const handleGetPosts = () => {
    dispatch(getPosts());
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGetPosts}>Get User's Posts</button>
        {status === "requesting" ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          false
        )}
        {status === "successful" ? (
          userList && userList.length > 0 ? (
            <div>
              <ul className="list-group">
                {userList.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <p>User name: {item.name}</p>
                    <p>User email: {item.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>Data is empty</div>
          )
        ) : (
          false
        )}
      </header>
    </div>
  );
}

export default App;
