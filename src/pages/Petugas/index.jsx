import Axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { API_URL } from "../../services/API";
import TabelPetugas from "./TabelPetugas";
import ModalsPetugas from "./ModalsPetugas";

export default class Petugas extends Component {
  state = {
    simpan: false,
    showmodal: false,
    petugas: [],
    newPetugas: {
      id: "",
      nama: "",
      password: "",
      alamat: "",
      notelp: 0,
      email: "",
    },
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get(API_URL + "petugas").then((res) => {
      this.setState({
        petugas: res.data,
      });
    });
  };

  handlerSimpan = () => {
    const { newPetugas } = this.state;
    Axios.post(API_URL + "petugas", newPetugas).then((res) => {
      this.getData();
      this.closeModal();
    });
  };

  handlerUpdate = () => {
    const newPetugas = { ...this.state.newPetugas };
    Axios.put(API_URL + "petugas/" + newPetugas["id"], newPetugas).then(
      (res) => {
        this.getData();
        this.closeModal();
      }
    );
  };

  handlerDelete = () => {
    const { id } = this.state.newPetugas;
    Axios.delete(API_URL + "petugas/" + id).then((res) => {
      this.getData();
      this.closeModal();
    });
  };

  handlerChange = (event) => {
    let newPetugas = { ...this.state.newPetugas };
    newPetugas[event.name] = event.value;
    this.setState({
      newPetugas,
    });
  };

  handlerValue = (data) => {
    let newPetugas = { ...data };
    this.setState({
      showmodal: true,
      simpan: false,
      newPetugas,
    });
    setTimeout(() => {
      const event = document.querySelectorAll(".text");
      event.forEach((target) => {
        target.value = newPetugas[target.name];
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
          className="mb-3"
          onClick={() => {
            this.showModal();
            this.setState({ simpan: true });
          }}
        >
          Tambah Data
        </Button>
        <ModalsPetugas
          simpan={this.state.simpan}
          showModal={this.state.showmodal}
          closeModal={this.closeModal}
          handlerChange={this.handlerChange}
          handlerSimpan={this.handlerSimpan}
          handlerDelete={this.handlerDelete}
          handlerUpdate={this.handlerUpdate}
        />
        <TabelPetugas
          dataPetugas={this.state.petugas}
          handlerValue={this.handlerValue}
        />
      </>
    );
  }
}
