import React, {Component} from 'react'
import QuestionRequest from './question_request'

class create_exam extends Component{
    render(){
        return(
            <div>
                <QuestionRequest />
                <button className='ui button' style={{margin: '20px'}}>
                Add Category
                </button>
            </div>
        )
    }
}

export default create_exam;