import React, { useState } from "react";
import "./todolist.css";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export default function TodoList2() {
  const [data, setdata] = useState({
    topic: "",
    content: "",
  });
  const [item, setitem] = useState([]);

  const adddata = (e) => {
    // setdata(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
    console.log(name, value);
  };

  let addinput = (e) => {
    e.preventDefault();
    setitem((olditem) => {
      return [...olditem, data];
    });
    // setdata("");
  };
  const CssTextField = {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#feefc3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#feefc3",
      },
      "&:hover fieldset": {
        borderColor: "#feefc3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#feefc3",
      },
    },
  };
  return (
    <Box>
      <Typography className="heading">To-Do List </Typography>
      <Box>
        <Grid container spacing={2} className="outer">
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              label="Enter Topic"
              sx={CssTextField}
              onChange={adddata}
              value={data.topic}
              name="topic"
              className="inputs"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <TextField
              label="Enter something"
              sx={CssTextField}
              onChange={adddata}
              value={data.content}
              name="content"
              multiline
              rows={7}
              className="inputs"
            />
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Button
              className="btns"
              color="primary"
              variant="contained"
              onClick={addinput}
            >
              <Add />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {/* <hr/> */}
        <Divider className="divider">Your Notes</Divider>
      </Box>

      <Box className="outer2">
        <Grid container spacing={3}>
          {item.map((data, index) => {
            return (
              <Grid
                item
                xl={3}
                lg={3}
                md={3}
                sm={12}
                xs={12}
                key={index}
                id={index}
              >
                <Box className="vdata">
                  <p className="csstopic">{data.topic}</p>
                  <Divider />
                  <p className="csscontent">{data.content}</p>
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
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
