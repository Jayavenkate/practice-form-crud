import { useState } from "react";
import { AddForm } from "./AddForm";
import "./App.css";
import { FormDetails } from "./FormDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { EditForm } from "./EditForm";

function App() {
  const [data, setData] = useState([
    // {
    //   Id: "1",
    //   Name: "Jaya",
    //   College: "Vins Christian college",
    //   Dob: "17.03.1996",
    //   OneSem: "75",
    //   TwoSem: "60",
    //   ThreeSem: "80",
    //   Status: "Active",
    // },
  ]);
  const addStudent = (newStudent) => {
    setData([...data, newStudent]);
  };
  const navigate = useNavigate();
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
        <Route path="/editform" element={<EditForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
