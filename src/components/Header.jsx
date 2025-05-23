import { Container , Navbar, Button } from "react-bootstrap";

function Header(props) {




  return <Container fluid>
    <Navbar>
      <h1>Heap Overrun</h1>   
      <Button onClick={()=>{ props.increaseLikes() }}>Like Footer</Button>
    </Navbar>
  </Container>

}

export default Header;