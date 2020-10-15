import "./App.css";
import React, { Component } from "react";
import Pelanggan from "./pages/Pelanggan";
import Sepeda from "./pages/Sepeda";
import Petugas from "./pages/Petugas";
import NavbarComp from "./component/NavbarComp";
import { Col, Container,Row } from "react-bootstrap";
import ListButton from "./component/ListButton";


export default class App extends Component {
  state={
    kategori:'pelanggan'
  }
  pages = ()=>{
    let {kategori} = this.state;
    
    switch(kategori){
      case 'pelanggan':
        return <Pelanggan/>

      case '/':
        return <Pelanggan/>

      case 'petugas':
        return <Petugas/>

      case 'sepeda':
        return <Sepeda/>

      default:
        return <Pelanggan/>
    }
  }

  changeKategori=(data)=>{
    this.setState({
      kategori:data
    })
  }

  render() {
    return (
      
      <>
        <NavbarComp/>
        <Container fluid className="mt-2">
          <Row>
            <Col xs={2}>
            <ListButton changeKategori={this.changeKategori}/>
            </Col>
            <Col xs={5}>
              {this.pages()}
            </Col>
            </Row>
            </Container>
        
        </>
    );
  }
}
