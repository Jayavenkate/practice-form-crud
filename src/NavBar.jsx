import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AddForm } from "./AddForm";
import { FormDetails } from "./FormDetails";
export function NavBar() {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  return (
    <div>
      {/* <AppBar
        position="sticky"
        sx={{ background: "none", boxShadow: "none", color: "black" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Student Mark Details
          </Typography> */}
      <Button onClick={() => navigate("/addstudent")}>Add Student</Button>
      {/* </Toolbar>
      </AppBar> */}
      <Routes>
        <Route path="/addstudent" element={<AddForm />}></Route>
        <Route
          path="/"
          element={<FormDetails data={data} setData={setData} />}
        ></Route>
      </Routes>
    </div>
  );
}
