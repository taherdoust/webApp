import { Table, Button } from "react-bootstrap"

function AnswerDisplay(props) {
    //props.answers
    const ans = props.answers
    return <Table>
        <thead>
            <tr>
                <th scope="col">Date</th>
                <th scope="col">Text</th>
                <th scope="col">Author</th>
                <th scope="col">Score</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            {ans.map( a => <AnswerRow key={a.id} answer={a}/>)}
        </tbody>
    </Table>
}

function AnswerRow(props) {
    const a = props.answer
    return <tr>
        <AnswerRowData answer={a} />
        <AnswerActionButtons action = {a} />
        
        {/* <td>actions</td> */}
    </tr>
}

function AnswerRowData(props) {
    const a = props.answer
    return <>
        <td>{a.date.format('YYYY-MM-DD')}</td>
        <td>{a.text}</td>
        <td>{a.email}</td>
        <td>{a.score}</td>
    </>
}

function AnswerActionButtons(props){
    return <td>
        <Button variant="primary">Vote</Button> <Button variant="warning">Edit</Button> <Button variant="danger">Delete</Button>


    </td>

}

export default AnswerDisplay