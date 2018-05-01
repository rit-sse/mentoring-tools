import React, {Component} from 'react';

class QuestionRequest extends Component{
    render(){
        return(
            <div className='ui centered grid' style={{padding: '5px'}}>
                <div className='ui segments' style={{width: '80%', padding: '5px'}}>
                    <div style={{width: '100%', display: 'flex'}}>
                        <div style={{flex: '1 1 auto', width: '33%'}}>
                            Tag : 
                            <div className='ui input'>
                                <input type='text' />
                            </div>
                        </div>
                        <div style={{flex: '1 1 auto', width: '33%'}}>
                            Question Count : 
                            <div className='ui input'>
                                <input type='text'/>
                            </div>
                        </div>
                        <div style={{flex: '1 1 auto', width: '33%'}}>
                            Type : 
                            <div className='ui input'>
                                <input type='text'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionRequest