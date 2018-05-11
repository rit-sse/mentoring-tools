import React, {Component} from 'react'
import QuestionReview from './question_review'

class Review extends Component{
    state = {
        questions : [
            {
                question : 'What is 2 + 2?',
                answer : '4',
                type : 'Short answer',
                tags : ['Math']
            },
            {
                question : 'Write psuedo code to iterate over a list.',
                answer : 'for item in list:',
                type : 'Psuedo Code',
                tags : ['List', 'Code']
            },
            {
                question : 'Explain dikstras algorithm.',
                answer : '...',
                type : 'Short Answer',
                tags : ['Graphs', 'Dikstras']
            },
        ]
    }

    render(){
        return(
            <div>
                {
                    this.state.questions.map((question, i) => 
                    <QuestionReview
                        key = {i}
                        question = {question.question}
                        answer = {question.answer}
                        type = {question.type}
                        tags = {question.tags}
                        />)
                }
            </div>
        )
    }
}

export default Review;