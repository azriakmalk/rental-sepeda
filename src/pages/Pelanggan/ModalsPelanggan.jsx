import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import FormPelanggan from "./FormPelanggan";

export default class ModalsPelanggan extends Component {
  render() {
    const showModal = this.props.showModal;
    let closeModal = this.props.closeModal;
    return (
      <Modal show={showModal} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormPelanggan
            changeHandler={this.props.changeHandler}
            handlerSimpan={this.props.handlerSimpan}
            handlerUpdate={this.props.handlerUpdate}
            handlerDelete={this.props.handlerDelete}
            simpan={this.props.simpan}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
