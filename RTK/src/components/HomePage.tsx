import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { addIssue } from "../slices/issue";
import { RootState } from "@reduxjs/toolkit/query";

const HomePage = () => {
  const dispatch = useDispatch();
  const issueList = useSelector(
    (state: RootState) => state.issue.projectIssues
  );

  const [textinput, setTextinput] = useState("");
  const handleTextInputChange = (e: any) => {
    setTextinput(e.target.value);
  };

  const handleClick = () => {
    dispatch(addIssue(textinput));
  };

  return (
    <div className="home_page">
      <Box sx={{ ml: "5rem", mr: "5rem" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: "2rem" }}>
          Project Issue tracker
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Add new issue here :
            </Typography>
            <TextField
              id="outlined-basic"
              label="Issue Title"
              variant="outlined"
              onChange={handleTextInputChange}
              value={textinput}
            />
            <Button variant="contained"  onClick={handleClick}>
              Add
            </Button>
          </Stack>
        </Box>

        <Box sx={{ mt: "2rem" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Recently added issues :
          </Typography>
          {
            issueList.map((issue: string) => (
              <ProjectCard issueTitle={issue} key={Math.random() * Math.random()} />
            ))
          }
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
