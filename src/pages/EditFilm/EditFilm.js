import React, { Component } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { Redirect } from "react-router-dom";

import axios from "../../axios-constain";

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

class EditFilm extends Component {
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
    id_phim: "",
    isDone: false,
  };

  componentDidMount() {
    const { id_phim } = this.props.match.params;

    axios
      .get(`/admin-page/detail-film/${id_phim}`)
      .then((res) => {
        this.setState({ ...res.data.film });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  changeInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  editFilmHandler = () => {
    const dataFilm = {
      EN_name: this.state.EN_name,
      VN_name: this.state.VN_name,
      status: this.state.status,
      director: this.state.director,
      duration: this.state.duration,
      urlImg: this.state.urlImg,
      actors: this.state.actors,
      producer: this.state.producer,
      country: this.state.country,
      date: this.state.date,
      content: this.state.content,
      type: this.state.type,
    };

    axios
      .put("/admin-page/edit-film/" + this.state.id_phim, dataFilm)
      .then((res) => {
        console.log(res.data);
        this.setState({ isDone: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteFilmHandler = () => {
    // axios
    //   .delete("/admin-page/delete-film/" + this.state.id_phim)
    //   .then((res) => {
    //     console.log(res.data);
    this.setState({ isDone: true });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    if (this.state.isDone) {
      return <Redirect to="/all-film" />;
    }
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
            startIcon={<EditIcon />}
            onClick={this.editFilmHandler}
          >
            Sửa phim
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteOutlineIcon />}
            onClick={this.deleteFilmHandler}
          >
            Xóa phim
          </Button>
        </div>
      </Container>
    );
  }
}

export default EditFilm;
