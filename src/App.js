import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EthCrypto from "eth-crypto";
import { useState } from "react";
import {
  Form,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";

function App() {
  const [identity, setIdentity] = useState({
    address: "",
    privateKey: "",
    publicKey: "",
  });

  const handleNewIdentity = (e) => {
    e.preventDefault();
    const identity = EthCrypto.createIdentity();
    setIdentity(identity);
  };

  return (
    <div className="App">
      <Nav>
        <NavItem>
          <NavLink active href="/">
            Idenity
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">Signup</NavLink>
        </NavItem>
      </Nav>

      <div className="middle">
        <Button
          active
          color="primary"
          outline
          size="sm"
          onClick={handleNewIdentity}
        >
          Generate New Identity
        </Button>
        <Card
          className="my-2"
          color="primary"
          inverse
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>Public Address</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Public Address below</CardTitle>
            <CardText>{identity.address}</CardText>
          </CardBody>
        </Card>
        <Card
          className="my-2"
          color="success"
          inverse
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>Public Key</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Public Key below</CardTitle>
            <CardText>{identity.publicKey}</CardText>
          </CardBody>
        </Card>
        <Card
          className="my-2"
          color="danger"
          inverse
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>Private Key</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Private Key below</CardTitle>
            <CardText>{identity.privateKey}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
