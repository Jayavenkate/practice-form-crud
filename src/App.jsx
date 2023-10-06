import { useState } from "react";
import { AddForm } from "./AddForm";
import "./App.css";
import { FormDetails } from "./FormDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const addStudent = (newStudent) => {
    setData([...data, newStudent]);
  };

  return (
    <>
      <Routes>
        <Route
          path="/addstudent"
          element={<AddForm addStudent={addStudent} data={data} />}
        ></Route>
        <Route
          path="/"
          element={<FormDetails data={data} setData={setData} />}
        ></Route>
        {/* <Route path="/editform" element={<EditForm data={data} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
