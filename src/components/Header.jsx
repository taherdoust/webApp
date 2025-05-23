import { Container , Navbar, Button } from "react-bootstrap";

function Header(props) {




  return <Container fluid>
    <Navbar>
      <h1>Heap Overrun</h1>   
      <Button onClick={()=>{
        console.log('clicked')
        props.setLikes(likes => likes+1)
        }}>Like Footer</Button>
    </Navbar>
  </Container>

}

export default Header;