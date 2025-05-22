import { Table } from "react-bootstrap"

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
            {ans.map( a => <AnswerRow answer={a}/>)}
        </tbody>
    </Table>
}

function AnswerRow(props) {
    const a = props.answer
    return <tr>
        {/* <td>{a.date}</td> */}
        <td>{a.text}</td>
    </tr>
}

export default AnswerDisplay