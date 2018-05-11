import React, { Component } from 'react';

class QuestionReview extends Component{
    state = {
        question: "This should not be visible",
        answer: "-1",
        type: "Should be hidden",
        tags: ["Should not be here."]
    };

    constructor(props){
        super(props)
        this.state.question = this.props.question
        this.state.answer = this.props.answer
        this.state.type = this.props.type
        this.state.tags = this.props.tags
    }

    render(){
        return(
            <div className='ui centered grid' style={{padding: '5px'}}>
                <div className='ui segment centered' style={{width: '80%', padding: '10px'}}>
                    <div style={{display: 'flex', width: '100%'}}>
                        <div style={{flex: '1', alignSelf: 'center'}}>
                            <div>
                                Question: {this.state.question}
                            </div> 
                            <div>
                                Answer: {this.state.answer}
                            </div>
                            <div>
                                Type: {this.state.type}
                            </div>  
                            <div>
                                Tags: {[...this.state.tags].map((x, i) => x + ', ' )}
                            </div>
                        </div>
                        <div className='options' style={{flex: '0 0 auto'}}>
                            <div className='ui steps' style={{backgroundColor: '#21BA45', margin: '10px', width: '65px', height: '65px', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                <i className="fas fa-check fa-4x"></i>
                            </div> 
                            <div className='ui steps' style={{backgroundColor: '#00B5AD', margin: '10px', width: '65px', height: '65px', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                <i className="far fa-edit fa-4x"></i>
                            </div>
                            <div className='ui steps' style={{backgroundColor: 'red', margin: '10px', width: '65px', height: '65px', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                <i className="far fa-trash-alt fa-4x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionReview;