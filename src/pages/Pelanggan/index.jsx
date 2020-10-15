import Axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { API_URL } from "../../services/API";
import ModalsPelanggan from "./ModalsPelanggan";
import TabelPelanggan from "./TabelPelanggan";
import { connect } from "react-redux";
import "./index.css";

class Pelanggan extends Component {
  state = {
    pelanggan: [],
    showmodal: false,
    simpan: false,
    newPelanggan: {
      id: "",
      Nama: "",
      Usia: 0,
      JK: "",
      Alamat: "",
      NoTelp: 0,
      Email: "",
    },
  };

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    Axios.get(API_URL + "pelanggan").then((res) => {
      this.setState({
        pelanggan: res.data,
      });
    });
  };
  changeHandler = (event) => {
    let newPelanggan = { ...this.state.newPelanggan };
    newPelanggan[event.name] = event.value;
    this.setState({
      newPelanggan,
    });
  };

  handlerSimpan = () => {
    const { newPelanggan } = this.state;
    Axios.post(API_URL + "pelanggan", newPelanggan).then((res) => {
      this.clearText();
    });
  };
  clearText = () => {
    const kd = document.querySelectorAll(".text");
    this.getData();
    kd.forEach((m) => {
      if (m.name === "JK") {
        m.value = "-=Pilih Jenis Kelamin=-";
      } else {
        m.value = "";
      }
    });
    this.setState({
      showmodal: false,
    });
  };

  handlerDelete = () => {
    const { newPelanggan } = this.state;
    Axios.delete(API_URL + "pelanggan/" + newPelanggan.id).then((res) => {
      this.getData();
      this.setState({
        showmodal: false,
      });
    });
  };
  handlerUpdate = () => {
    const { newPelanggan } = this.state;
    Axios.put(
      API_URL + "pelanggan/" + this.state.newPelanggan.id,
      newPelanggan
    ).then((res) => {
      this.clearText();
    });
  };
  handleValue = (data) => {
    let newPelanggan = { ...data };
    this.setState({
      showmodal: true,
      simpan: false,
      newPelanggan,
    });
    setTimeout(() => {
      const event = document.querySelectorAll(".text");
      event.forEach((target) => {
        target.value = newPelanggan[target.name];
      });
    }, 100);
  };

  showModal = () => {
    this.setState({
      showmodal: true,
    });
  };
  closeModal = () => {
    this.setState({
      showmodal: false,
    });
  };
  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => {
            this.showModal();
            this.setState({
              simpan: true,
            });
          }}
          className="mb-3"
        >
          Tambah Data
        </Button>
        <ModalsPelanggan
          closeModal={this.closeModal}
          showModal={this.state.showmodal}
          simpan={this.state.simpan}
          changeHandler={this.changeHandler}
          handlerSimpan={this.handlerSimpan}
          handlerUpdate={this.handlerUpdate}
          handlerDelete={this.handlerDelete}
        />
        <TabelPelanggan
          handleValue={this.handleValue}
          pelanggan={this.state.pelanggan}
        />
      </>
    );
  }
}
const store = (state) => {
  return {
    pelanggan: state.pelanggan,
  };
};

export default connect(store)(Pelanggan);
