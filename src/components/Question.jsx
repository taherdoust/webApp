import { Col, Container, Row } from "react-bootstrap"

function QuestionDisplay(props) {


    const q = props.question


    return <Container fluid>

        <Row>
            <Col as='h2'>Question number {q.id}</Col>
            <Col>Asked by: {q.email}</Col>
        </Row>
        <Row>
            <Col>{q.text}</Col>
        </Row>
    </Container>



}

export default QuestionDisplay;