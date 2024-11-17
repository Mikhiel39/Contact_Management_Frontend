import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

function EditContact(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { _id, firstName, lastName, email, phoneNumber, company, jobTitle } =
    location.state.contact;
  const [user, setUser] = useState({
    _id,
    firstName,
    lastName,
    email,
    phoneNumber,
    company,
    jobTitle,
  });

  const update = (e) => {
    e.preventDefault();
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.phoneNumber === "" ||
      user.company === "" ||
      user.jobTitle === ""
    ) {
      alert("All fields are mandatory!!!");
      return;
    }
    props.updateContactHandler(user);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company:"",
      jobTitle: "",
    });
    navigate("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Edit Contact
        </Typography>
        <form className="ui form" onSubmit={update} style={{ width: "100%" }}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          />
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user.company}
            onChange={(e) => setUser({ ...user, company: e.target.value })}
          />
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={user.jobTitle}
            onChange={(e) => setUser({ ...user, jobTitle: e.target.value })}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Update Contact
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default EditContact;
