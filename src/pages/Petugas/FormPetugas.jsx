import React from "react";
import { Button, Form } from "react-bootstrap";

export default class FormPetugas extends React.Component {
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
          <Form.Label>Kode Petugas</Form.Label>
          <Form.Control
            type="text"
            name="id"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nama Petugas</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            type="text"
            name="alamat"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>No Telepon</Form.Label>
          <Form.Control
            type="text"
            name="notelp"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>
        {this.tampil()}
      </Form>
    );
  }
}
