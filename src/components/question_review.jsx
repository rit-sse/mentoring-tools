import React, { Component } from 'react';

class QuestionReview extends Component{
    render(){
        return(
            <div className='ui steps' style={{width: '80%', padding: '10px'}}>
                <div style={{display: 'flex', width: '100%'}}>
                    <div style={{flex: '1', alignSelf: 'center'}}>
                        <div>
                            You found a question.
                        </div>
                        <div>
                            Question Information    
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
        )
    }
}

export default QuestionReview;