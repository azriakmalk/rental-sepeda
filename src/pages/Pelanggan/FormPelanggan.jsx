import React from "react";
import { Button, Form } from "react-bootstrap";

export default class FormPelanggan extends React.Component {
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
    const changeHandler = this.props.changeHandler;
    return (
      <Form>
        <Form.Group>
          <Form.Label>Kode Pelanggan</Form.Label>
          <Form.Control
            type="text"
            name="id"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="Nama"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Usia</Form.Label>
          <Form.Control
            type="text"
            name="Usia"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Jenis Kelamin</Form.Label>
          <Form.Control
            as="select"
            name="JK"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          >
            <option hidden>-=Pilih Jenis Kelamin=-</option>
            <option>Laki - Laki</option>
            <option>Perempuan</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            as="textarea"
            name="Alamat"
            className="text"
            onChange={(event) => changeHandler(event.target)}
            rows={3}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>No Telpon</Form.Label>
          <Form.Control
            type="text"
            name="NoTelp"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="Email"
            className="text"
            onChange={(event) => changeHandler(event.target)}
          />
        </Form.Group>
        {this.tampil()}
      </Form>
    );
  }
}
