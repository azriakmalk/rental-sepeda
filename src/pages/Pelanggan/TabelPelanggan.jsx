import React from "react";
import { Table } from "react-bootstrap";

const TabelPelanggan = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Kode Pelanggan</th>
          <th>Nama</th>
          <th>Usia</th>
          <th>Jenis Kelamin</th>
          <th>Alamat</th>
          <th>No Telp</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.pelanggan.map((data) => {
          return (
            <tr key={data.id} onClick={() => props.handleValue(data)}>
              <td>{data.id}</td>
              <td>{data.Nama}</td>
              <td>{data.Usia}</td>
              <td>{data.JK}</td>
              <td>{data.Alamat}</td>
              <td>{data.NoTelp}</td>
              <td>{data.Email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TabelPelanggan;
