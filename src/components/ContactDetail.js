import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import user from "../images/user.jpg";

const ContactDetail = () => {
  const location = useLocation();
  const { firstName, lastName, email, phoneNumber, company, jobTitle } =
    location.state.contact;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          alt="user"
          height="300"
          image={user}
          sx={{
            borderRadius: "50%",
            width: 150,
            height: 150,
            margin: "20px auto 0",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="div" fontWeight="bold">
            {firstName} {lastName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Comapany Name: {company}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Job Title: {jobTitle}
          </Typography>
          <Typography variant="body1" mt={2}>
            Email: {email}
          </Typography>
          <Typography variant="body1">Phone Number: {phoneNumber}</Typography>
        </CardContent>
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="error">
              Contact List
            </Button>
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default ContactDetail;
