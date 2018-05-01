import React, {Component} from 'react';

class QuestionRequest extends Component{
    render(){
        return(
            <div className='ui centered grid'>
                <div className='ui segments' style={{width: '80%', padding: '5px'}}>
                    Tag : 
                    <div className='ui input'>
                        <input type='text' />
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionRequest