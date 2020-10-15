import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import FormSepeda from "./FormSepeda";

export default class ModalsSepeda extends Component {
  render() {
    const showModal = this.props.showModal;
    const closeModal = this.props.closeModal;
    return (
      <Modal show={showModal} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormSepeda
            handlerChange={this.props.handlerChange}
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
