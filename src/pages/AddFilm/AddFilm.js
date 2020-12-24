import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";

import axios from "../../axios-constain";
// 0 ngưng chiếu
// 1 sắp chiếu
// 2 đang chiếu
// 3 vy béo

const status = [
  {
    value: "0",
    label: "Ngưng chiếu",
  },
  {
    value: "1",
    label: "Sắp chiếu",
  },

  {
    value: "2",
    label: "Đang chiếu",
  },
];

class AddFilm extends Component {
  state = {
    EN_name: "",
    VN_name: "",
    status: "0",
    type: "",
    duration: "0",
    urlImg: "",
    director: "",
    actors: "",
    producer: "",
    country: "",
    date: new Date().toLocaleDateString(),
    content: "",
  };

  componentDidMount() {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    this.setState({ date: `${year}-${month}-${day}` });
  }

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = () => {
    const filmData = {
      ...this.state,
    };

    axios
      .post("/admin-page/add-film", filmData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="form-add-film">
        <TextField
          id="EN_name"
          name="EN_name"
          label="Tên gốc của phim"
          variant="outlined"
          value={this.state.EN_name}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="VN_name"
          name="VN_name"
          label="Tên dịch của phim"
          variant="outlined"
          value={this.state.VN_name}
          onChange={this.changeInputHandler}
        />

        <TextField
          name="status"
          id="status"
          select
          label="Trạng thái"
          value={this.state.status}
          onChange={this.changeInputHandler}
          variant="outlined"
        >
          {status.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="duration"
          name="duration"
          label="Thời lượng"
          variant="outlined"
          value={this.state.duration}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="type"
          name="type"
          label="Thể loại"
          variant="outlined"
          value={this.state.type}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="urlImg"
          name="urlImg"
          label="Url Hình ảnh"
          variant="outlined"
          value={this.state.urlImg}
          onChange={this.changeInputHandler}
        />

        {this.state.urlImg ? (
          <img src={this.state.urlImg} alt={this.state.urlImg} />
        ) : null}

        <TextField
          id="director"
          name="director"
          label="Đạo diễn"
          variant="outlined"
          value={this.state.director}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="actors"
          name="actors"
          label="Tên các diễn viên"
          variant="outlined"
          value={this.state.actors}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="producer"
          name="producer"
          label="Nhà sản xuất"
          variant="outlined"
          value={this.state.producer}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="country"
          name="country"
          label="Quốc gia"
          variant="outlined"
          value={this.state.country}
          onChange={this.changeInputHandler}
        />

        <TextField
          id="date"
          name="date"
          type="date"
          value={this.state.date}
          onChange={this.changeInputHandler}
          //   label="Ngày chiếu"
          variant="outlined"
        />

        <TextField
          id="content"
          name="content"
          label="Nội dung phim"
          multiline
          rows={4}
          variant="outlined"
          value={this.state.content}
          onChange={this.changeInputHandler}
        />

        <div className="add-film-button">
          <Button
            variant="contained"
            style={{ background: "yellowgreen" }}
            onClick={this.submitHandler}
          >
            Thêm phim
          </Button>
          <Button variant="contained" color="secondary">
            Hủy bỏ
          </Button>
        </div>
      </Container>
    );
  }
}

export default AddFilm;
