// import './App.css';
import Nav from './components/Navbar';
import Login from './components/Auth';
// import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from './pages/Home';

//                    Google Auth 
// const [user, setUser] = useState(null);
//   useEffect(() => {
//     const getUser = () => {
//       fetch("http://localhost:5000/auth/login/success", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Credentials": true,
//         },
//       })
//         .then((response) => {
//           if (response.status === 200) return response.json();
//           throw new Error("authentication has been failed!");
//         })
//         .then((resObject) => {
//           setUser(resObject.user);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };
//     getUser();
//   }, []);


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
          "Access-Control-Allow-Credentials": true,
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
          <Nav />
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;