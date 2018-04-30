import React, { Component } from 'react';

class QuestionReview extends Component{
    render(){
        return(
            <div>
                You found a question.
                <div>
                    Question Information    
                </div>  
                <div>
                    Accept the question (GREEN)
                </div> 
                <div>
                    Edit the question (BLUE)
                </div>
                <div>
                    Remove Question (RED)
                </div>
            </div>
        )
    }
}

export default QuestionReview;