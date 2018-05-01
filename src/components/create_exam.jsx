import React, {Component} from 'react'
import QuestionRequest from './question_request'

class CreateExam extends Component{
    render(){
        return(
            <div>
                <QuestionRequest />
                <QuestionRequest />
                <button className='ui button' style={{margin: '20px'}}>
                Add Category
                </button>
            </div>
        )
    }
}

export default CreateExam;