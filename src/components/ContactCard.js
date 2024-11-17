import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import icon from "../images/icon.jpg";

function ContactCard(props) {
  const { _id, firstName, lastName, email, phoneNumber, company, jobTitle } =
    props.contact;
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        marginBottom: 2,
        boxShadow: 3,
      }}
    >
      <Avatar
        src={icon}
        alt="icon"
        sx={{
          width: 56,
          height: 56,
          marginRight: 2,
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Link
          to={`/contact/${_id}`}
          state={{ contact: props.contact }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {company}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {phoneNumber}
          </Typography>
        </Link>
      </CardContent>
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton color="error" onClick={() => props.clickHandler(_id)}>
          <DeleteOutline />
        </IconButton>
        <Link
          to={`/edit`}
          state={{ contact: props.contact }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <IconButton color="primary">
            <EditOutlined />
          </IconButton>
        </Link>
      </Box>
    </Card>
  );
}

export default ContactCard;
