import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Card, CardActions, CardContent, TextField } from "@mui/material";
import "./AddForm.css";
import { useState } from "react";
export function EditForm() {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [College, setCollege] = useState("");
  const [Dob, setDob] = useState("");
  const [OneSem, setOnesem] = useState("");
  const [TwoSem, setTwoSem] = useState("");
  const [ThreeSem, setThreeSem] = useState("");

  const updatedata = () => {
    const editstudent = data.findIndex((data) => data.Id === editId);
    const update = {
      Id: data.length + 1,
      Name,
      College,
      Dob,
      OneSem,
      TwoSem,
      ThreeSem,
    };
    console.log(update);
    data[editstudent] = update;
    setData([...data]);
  };

  return (
    <div>
      <Button
        onClick={() => navigate("/")}
        sx={{ border: "1px solid", margin: "10px" }}
      >
        Back
      </Button>

      <Card
        sx={{
          width: "450px",
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h3>Edit student Details</h3>
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
              onClick={() => updatedata()}
            >
              Update
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
