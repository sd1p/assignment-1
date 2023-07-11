import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Task1 from "./components/Task1/Task1";
import Navbar from "./components/Navbar/Navbar";
import NotFound404 from "./components/404 NotFound/NotFound404";
import Task2 from "./components/Task2/Task2";
import Task3 from "./components/Task3/Task3";
import { useEffect } from "react";
import { fetchUsers } from "./redux/usersSlice";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

function App() {
  //fetching 1 user in advance to render task 3
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(1));
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Assessment-1</title>
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3/:id" element={<Task3 />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
