import React from "react";
import { Table } from "react-bootstrap";

const TabelSepeda = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Kode Sepeda</th>
          <th>Nama Sepeda</th>
          <th>Tipe Sepeda</th>
          <th>Ketersediaan</th>
          <th>Harga Sewa</th>
        </tr>
      </thead>
      <tbody>
        {props.dataSepeda.map((data, index) => {
          return (
            <tr key={index} onClick={() => props.handlerValue(data)}>
              <td>{data.id}</td>
              <td>{data.nama}</td>
              <td>{data.tipe}</td>
              <td>{data.ketersediaan}</td>
              <td>{data.harga}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TabelSepeda;
