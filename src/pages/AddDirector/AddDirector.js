import React, { Component } from "react";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

class AddDirector extends Component {
  state = {
    gender: '',
    name_director: '',
    director_introduce: '',
    avatar: ''
  };


  changeInputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <TextField
          style={{ width: "100%", margin: "5px" }}
          name="name_director"
          id=""
          label="Tên Đạo Diễn"
          variant="outlined"
          value={this.state.name_director}
            onChange={this.changeInputHandler}
        ></TextField>

        <FormControl style={{ width: "100%", margin: "5px" }}>
          <InputLabel id="demo-simple-select-label">Giới Tính</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            name="gender"
            value={this.state.gender}
            onChange={(event) => {
                // console.log(event.target.value);
                this.setState({
                    gender: event.target.value,
                });
              }}
          >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
          </Select>
        </FormControl>

        <TextField
          style={{ width: "100%", margin: "5px" }}
          name="director_introduce"
          id=""
          label="Tiểu Sử"
          variant="outlined"
          value={this.state.director_introduce}
            onChange={this.changeInputHandler}
        ></TextField>

        <TextField
          style={{ width: "100%", margin: "5px" }}
          id=""
          name="avatar"
          label="Avatar"
          variant="outlined"
          value={this.state.avatar}
            onChange={this.changeInputHandler}
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{ background: "yellowgreen", margin: "10px" }}
          onClick={this.submitHandler}
        >
          Thêm Đạo Diễn
        </Button>

        <Button
          variant="contained"
          color="secondary"
          startIcon={<CloseIcon />}
          style={{ margin: "10px" }}
        >
          Hủy Thêm
        </Button>
      </div>
    );
  }
}

export default AddDirector;
