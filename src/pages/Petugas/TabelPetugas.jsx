import React from "react";
import { Table } from "react-bootstrap";

const TabelPetugas = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Kode Petugas</th>
          <th>Nama Petugas</th>
          <th>Password</th>
          <th>Alamat</th>
          <th>No Telepon</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.dataPetugas.map((data, index) => {
          return (
            <tr key={index} onClick={() => props.handlerValue(data)}>
              <td>{data.id}</td>
              <td>{data.nama}</td>
              <td>{data.password}</td>
              <td>{data.alamat}</td>
              <td>{data.notelp}</td>
              <td>{data.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TabelPetugas;
