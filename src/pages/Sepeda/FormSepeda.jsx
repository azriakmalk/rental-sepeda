import React from "react";
import { Button, Form } from "react-bootstrap";

export default class FormSepeda extends React.Component {
  tampil = () => {
    if (this.props.simpan) {
      return (
        <Button
          variant="primary"
          name="button"
          onClick={() => this.props.handlerSimpan()}
        >
          Simpan
        </Button>
      );
    } else {
      return (
        <>
          <Button
            variant="primary"
            name="button"
            className="ml-3"
            onClick={() => this.props.handlerUpdate()}
          >
            Update
          </Button>
          <Button
            variant="danger"
            name="button"
            className="ml-3"
            onClick={() => this.props.handlerDelete()}
          >
            Delete
          </Button>
        </>
      );
    }
  };
  render() {
    const changeHandler = this.props.handlerChange;
    return (
      <Form>
        <Form.Group>
          <Form.Label>Kode Sepeda</Form.Label>
          <Form.Control
            type="text"
            name="id"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nama Sepeda</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tipe Sepeda</Form.Label>
          <Form.Control
            type="text"
            name="tipe"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Ketersediaan</Form.Label>
          <Form.Control
            type="text"
            name="ketersediaan"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Harga Sewa</Form.Label>
          <Form.Control
            type="text"
            name="harga"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>
        {this.tampil()}
      </Form>
    );
  }
}
