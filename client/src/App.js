// import './App.css';
import Nav from './components/Navbar';
import Login from './pages/Auth';
// import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Community from './pages/Community';
import OpenQues from './pages/OneQues';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": false,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Nav isLogin={user ? true : false} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/post/:id"
              element={user ? <h1> Hello</h1> : <Navigate to="/login" />}
            />
            <Route
              path="/community"
              element={<Community />}
            />

            <Route
              path="/community/:quesId"
              element={<OpenQues />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;