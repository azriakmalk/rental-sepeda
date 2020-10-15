import React, { Component } from "react";
import { Button } from "react-bootstrap";
import ModalsSepeda from "./ModalsSepeda";
import TabelSepeda from "./TabelSepeda";
import Axios from "axios";
import { API_URL } from "../../services/API";
import "./index.css";

export default class Sepeda extends Component {
  state = {
    showmodal: false,
    simpan: false,
    sepeda: [],
    newSepeda: {
      id: "",
      nama: "",
      tipe: "",
      ketersediaan: 0,
      harga: 0,
    },
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    Axios.get(API_URL + "sepeda").then((res) => {
      this.setState({
        sepeda: res.data,
      });
    });
  };

  handlerSimpan = () => {
    const { newSepeda } = this.state;
    Axios.post(API_URL + "sepeda", newSepeda).then((res) => {
      this.getData();
      this.closeModal();
    });
  };

  handlerUpdate = () => {
    const { newSepeda } = this.state;
    const { id } = this.state.newSepeda;
    Axios.put(API_URL + "sepeda/" + id, newSepeda).then((res) => {
      this.getData();
      this.closeModal();
    });
  };

  handlerDelete = () => {
    const { id } = this.state.newSepeda;
    console.log(id);
    Axios.delete(API_URL + "sepeda/" + id).then((res) => {
      this.getData();
      this.closeModal();
    });
  };

  handlerChange = (event) => {
    let newSepeda = { ...this.state.newSepeda };
    newSepeda[event.name] = event.value;
    this.setState({
      newSepeda,
    });
  };

  handlerValue = (data) => {
    let newData = { ...data };
    this.setState({
      showmodal: true,
      simpan: false,
      newSepeda: newData,
    });
    setTimeout(() => {
      const event = document.querySelectorAll(".text");

      event.forEach((target) => {
        target.value = newData[target.name];
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
        <ModalsSepeda
          simpan={this.state.simpan}
          showModal={this.state.showmodal}
          closeModal={this.closeModal}
          handlerChange={this.handlerChange}
          handlerSimpan={this.handlerSimpan}
          handlerDelete={this.handlerDelete}
          handlerUpdate={this.handlerUpdate}
        />
        <TabelSepeda
          dataSepeda={this.state.sepeda}
          handlerValue={this.handlerValue}
        />
      </>
    );
  }
}
