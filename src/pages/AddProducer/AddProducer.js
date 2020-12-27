import React, { useState } from "react";
import { Container, TextField, makeStyles, Button } from "@material-ui/core";
import axios from "../../axios-constain";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "1rem",
  },
  textField: {
    width: "100%",
    margin: "6px 0",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    margin: "6px 16px",
  },
}));

function AddProducer() {
  const classes = useStyles();

  const [state, setState] = useState({
    name: "",
    website: "",
    type: "",
  });

  const changeInputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitDataHandler = () => {
    // console.log(state);
    axios
      .post("/add-producer", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className={classes.container}>
      <TextField
        className={classes.textField}
        id="name"
        name="name"
        label="Tên nhà sản xuất"
        variant="outlined"
        value={state.name}
        onChange={changeInputHandler}
      />
      <TextField
        className={classes.textField}
        id="website"
        name="website"
        label="Website nhà sản xuất"
        variant="outlined"
        value={state.website}
        onChange={changeInputHandler}
      />
      <TextField
        className={classes.textField}
        id="type"
        name="type"
        label="Thể loại"
        variant="outlined"
        value={state.type}
        onChange={changeInputHandler}
      />

      <div className={classes.btnGroup}>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={submitDataHandler}
        >
          Thêm Nhà sản xuất
        </Button>

        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          onClick={() => {
            setState({ name: "", type: "", website: "" });
          }}
        >
          Reset
        </Button>
      </div>
    </Container>
  );
}

export default AddProducer;
