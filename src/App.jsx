import { useState } from "react";
import { AddForm } from "./AddForm";
import "./App.css";
import { FormDetails } from "./FormDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { EditForm } from "./EditForm";

function App() {
  const navigate = useNavigate();
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

  //edit data
  const [Name, setName] = useState("");
  const [College, setCollege] = useState("");
  const [Dob, setDob] = useState("");
  const [OneSem, setOnesem] = useState("");
  const [TwoSem, setTwoSem] = useState("");
  const [ThreeSem, setThreeSem] = useState("");
  const editdata = (Id) => {
    const selected = data.find((data) => data.Id === Id);

    setName(selected.Name);
    setCollege(selected.College);
    setDob(selected.Dob);
    setOnesem(selected.OneSem);
    setTwoSem(selected.TwoSem);
    setThreeSem(selected.ThreeSem);
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
          element={
            <FormDetails data={data} setData={setData} editdata={editdata} />
          }
        ></Route>
        {/* <Route path="/editform" element={<EditForm data={data} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
