import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {Question, Answer} from './models/QAModels.mjs'
import QuestionDisplay from './components/Question'
import AnswerDisplay from './components/Answer'

import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [likes,setLikes] = useState(0)


  const fakeQuestion = new Question(1, 'how are you', 'me@mail.com', 24, '2025-04-01')
  const fakeAnswers = []
  fakeAnswers.push(new Answer(10, 'Ok','a@babel.com',100,'2025-04-01'))
  fakeAnswers.push(new Answer(11, 'it crashes','c@d.com',101,'2025-03-31'))

  return (
  <div>
    <Header setLikes = {setLikes}/>
    <QuestionDisplay question={fakeQuestion}/>
    <AnswerDisplay answers={fakeAnswers}/>
    <Footer likes={likes} setLikes={setLikes}/>
  </div>
  )
}



export default App
