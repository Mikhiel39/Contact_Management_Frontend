import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";

function ContactList(props) {
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <Grid item xs={12} sm={6} md={4} key={contact._id}>
        <ContactCard contact={contact} clickHandler={deleteContactHandler} />
      </Grid>
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h4" gutterBottom>
          Contact List
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Link to="/add" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Add Contact
            </Button>
          </Link>
          <TextField
            label="Search Contact"
            variant="outlined"
            size="small"
            value={props.term}
            onChange={getSearchTerm}
            inputRef={inputEl}
            sx={{ width: 300 }}
          />
        </Box>
      </Paper>

      <Grid container spacing={2}>
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <Typography variant="body1">No Contacts available</Typography>
        )}
      </Grid>
    </Box>
  );
}

export default ContactList;
