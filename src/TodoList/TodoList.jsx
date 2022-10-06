import React, { useState } from "react";
import "./todolist.css";
import { Box, TextField, Typography, Button, Grid, Divider } from "@mui/material";
import { Add } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default function TodoList() {
  const [data, setdata] = useState("");
  const [item, setitem] = useState([]);

  const adddata = (e) => {
    setdata(e.target.value);
  };

  let addinput = () => {
    setitem((olditem) => {
      return [...olditem, data];
    });
    setdata("");
  }; 
  const CssTextField ={
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#feefc3',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#feefc3',
      },
      '&:hover fieldset': {
        borderColor: '#feefc3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#feefc3',
      },
    },
  }

  return (
    <Box>
      <Typography className="heading">To-Do List </Typography>
      <Grid container spacing={2} className="outer">
      
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <TextField
            // type="text"
            label="Enter something"
            sx={CssTextField}
            onChange={adddata}
            value={data}
            multiline
            rows={7}
            className="inputs"
          />
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Button
            className="btns"
            color="primary"
            variant='contained'
            onClick={addinput}
          >
            <Add />
          </Button>
        </Grid>
      </Grid>
      <Divider className="divider">Your Notes</Divider>
      <Box className="outer2">
        <Grid container spacing={3}>
          {item.map((data, index) => {
            return (
              <Grid item xl={3} lg={3} md={3} key={index} id={index}>
                <p item xl={3} lg={3} md={3} className="vdata">
                  {data}
                  <span>
                    <DeleteOutlineIcon
                      color="error"
                      className="wrong"
                      variant="outlined"
                      onClick={() => {
                        setitem((olditem) => {
                          return olditem.filter((arr, i) => {
                            return i !== index;
                          });
                        });
                      }}
                    />
                  </span>
                  {/* <ContentCopyIcon className="wrong" onClick={navigator.clipboard.writeText()}/> */}
                </p>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
