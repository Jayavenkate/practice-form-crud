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

import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormDetails({ data, setData }) {
  const navigate = useNavigate();
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
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  return (
    <>
      <Button
        onClick={() => navigate("/addstudent")}
        sx={{ border: "1px solid" }}
      >
        Add Student
      </Button>

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
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>InActive</Typography>
                        <AntSwitch
                          defaultChecked
                          inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography>Active</Typography>
                      </Stack>
                    </FormGroup>
                  </TableCell>
                  <TableCell>{calculateTotal(data)}</TableCell>
                  <TableCell>
                    <IconButton>
                      <EditIcon onClick={() => navigate("/editform")} />
                    </IconButton>
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
      </div>
    </>
  );
}
