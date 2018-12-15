import React, {Component} from 'react'
import QuestionRequest from './question_request'

class CreateExam extends Component{
    constructor(props){
        super(props);
        this.state = {
            questionList: []
        };
        this.onAddQuestion = this.onAddQuestion.bind(this);
    }

    onAddQuestion(event){
        const questions = this.state.questionList;
        this.setState({
            questionList: questions.concat(<QuestionRequest/>)
        })
    }

    render(){
        return(
            <div>
                {
                    // this.state.questionList
                    this.state.questionList.map((question, i) =>
                        <QuestionRequest
                            item = {i}
                            removeItem = {this.removeQuestion}
                        />
                    )
                }
                <button onClick={this.onAddQuestion} className='ui button' style={{margin: '20px'}}>
                Add Category
                </button>
            </div>
        )
    }
}

export default CreateExam;