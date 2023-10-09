import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import { Card, CardActions, CardContent, TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toggle } from "./Toggle";

export function FormDetails({ data, setData, show }) {
  const navigate = useNavigate();
  //switch button
  const [toggle, setToggle] = useState(false);
  const togglerSwitch = () => {
    setToggle(!toggle);
  };

  //edit student
  const [editingStudent, setEditingStudent] = useState(null);

  const [Name, setName] = useState("");
  const [College, setCollege] = useState("");
  const [Dob, setDob] = useState("");
  const [OneSem, setOnesem] = useState("");
  const [TwoSem, setTwoSem] = useState("");
  const [ThreeSem, setThreeSem] = useState("");

  const handleEdit = (data) => {
    setEditingStudent(data);
    setName(data.Name);
    setCollege(data.College);
    setDob(data.Dob);
    setOnesem(data.OneSem);
    setTwoSem(data.TwoSem);
    setThreeSem(data.ThreeSem);
  };

  const updatedata = () => {
    const editedStudentIndex = data.findIndex(
      (student) => student.Id === editingStudent.Id
    );
    const update = {
      Id: data.length,
      Name: Name,
      College: College,
      Dob: Dob,
      OneSem: OneSem,
      TwoSem: TwoSem,
      ThreeSem: ThreeSem,
    };
    data[editedStudentIndex] = update;
    setData([...data]);
    setEditingStudent(null);
  };

  //delete popop

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  // total value
  const calculateTotal = (data) => {
    const { OneSem, TwoSem, ThreeSem } = data;
    const total = [OneSem, TwoSem, ThreeSem].reduce((acc, currentValue) => {
      return acc + parseFloat(currentValue || 0);
    }, 0);
    return total;
  };
  const handleDelete = (dataToDelete) => {
    const removedata = data.filter((item) => item.Id !== dataToDelete.Id);
    setData(removedata);
    console.log("delete", dataToDelete);
  };

  return (
    <>
      <Button
        onClick={() => navigate("/addstudent")}
        sx={{ border: "1px solid" }}
      >
        Add Student
      </Button>

      {show ? (
        <div style={{ marginTop: "20px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>College</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>1st-sem</TableCell>
                  <TableCell>2nd-sem</TableCell>
                  <TableCell>3rd-sem</TableCell>
                  <TableCell>Staus</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((data) => (
                  <TableRow key={data.Id}>
                    <TableCell component="th" scope="row">
                      {data.Id}
                    </TableCell>
                    <TableCell>{data.Name}</TableCell>
                    <TableCell>{data.College}</TableCell>
                    <TableCell>{data.Dob}</TableCell>
                    <TableCell>{data.OneSem}</TableCell>
                    <TableCell>{data.TwoSem}</TableCell>
                    <TableCell>{data.ThreeSem}</TableCell>
                    <TableCell>
                      <Toggle />
                    </TableCell>
                    <TableCell>{calculateTotal(data)}</TableCell>
                    <TableCell>
                      <Button>
                        <EditIcon onClick={() => handleEdit(data)} />
                      </Button>
                      <IconButton onClick={handleOpen}>
                        <DeleteOutlineIcon style={{ cursor: "pointer" }} />
                      </IconButton>
                      <Dialog
                        open={open}
                        onClose={handleOpen}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Are You sure Delete this table data?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Yes sure i confirmed delete this student data
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleOpen}>Cancel</Button>
                          <Button onClick={() => handleDelete(data)}>
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {editingStudent && (
            <Card
              sx={{
                width: "450px",
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <h3>Update student Details</h3>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  width: "400px",
                }}
              >
                <TextField
                  label="Enter student Name"
                  variant="outlined"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                />
                <TextField
                  label="Enter College Name"
                  variant="outlined"
                  value={College}
                  onChange={(event) => setCollege(event.target.value)}
                />
                <TextField
                  label="Enter student DOB"
                  variant="outlined"
                  value={Dob}
                  onChange={(event) => setDob(event.target.value)}
                />
                <TextField
                  label="Enter First semester Mark"
                  variant="outlined"
                  value={OneSem}
                  onChange={(event) => setOnesem(event.target.value)}
                />
                <TextField
                  label="Enter Second semester Mark"
                  variant="outlined"
                  value={TwoSem}
                  onChange={(event) => setTwoSem(event.target.value)}
                />
                <TextField
                  label="Enter Third semester Mark"
                  variant="outlined"
                  value={ThreeSem}
                  onChange={(event) => setThreeSem(event.target.value)}
                />
                <CardActions>
                  <Button
                    sx={{ width: "400px" }}
                    variant="contained"
                    onClick={updatedata}
                  >
                    Update
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <p
          style={{
            marginTop: "50px",
            textAlign: "center",
            border: "1px solid black",
            width: "250px",
            display: "flex",
            margin: "0 auto",
            alignItems:"center",
            justifyContent:"center"
          }}
        >
          No Data
        </p>
      )}
    </>
  );
}
