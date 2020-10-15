import React, { Component, Fragment } from "react";
import { ListGroup } from "react-bootstrap";
import "./style.css";

export default class ListButton extends Component {
  alertClicked = (data) => {
    data.preventDefault();
  };
  render() {
    const { changeKategori } = this.props;

    return (
      <Fragment>
        <ListGroup defaultActiveKey="active">
          <ListGroup.Item
            action
            href="pelanggan"
            onClick={(event) => {
              changeKategori("/");
              this.alertClicked(event);
            }}
          >
            <strong>Pelanggan</strong>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="sepeda"
            onClick={(event) => {
              changeKategori("sepeda");
              this.alertClicked(event);
            }}
          >
            <strong>Sepeda</strong>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="sewa"
            onClick={(event) => {
              changeKategori("/");
              this.alertClicked(event);
            }}
          >
            <strong>Sewa</strong>
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="petugas"
            onClick={(event) => {
              changeKategori("petugas");
              this.alertClicked(event);
            }}
          >
            <strong>Petugas</strong>
          </ListGroup.Item>
        </ListGroup>
      </Fragment>
    );
  }
}
