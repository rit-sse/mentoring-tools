import React, {Component} from 'react'

class AddQuestion extends Component{
    render(){
        return(
            <div>
                <form>
                    Quesion :  
                    <div className='ui input'>
                        <input type='text'/>
                    </div>
                    <br/>
                    <br/>
                    Answer : 
                    <div className='ui input'>
                        <input type='text'/>
                    </div>
                    <br/>
                    <br/>
                    Type : 
                    <select className="ui dropdown">
                        <option value=''>Select One</option>
                        <option value='multiple_choice'>Multiple Choice</option>
                        <option value='matching'>Matching</option>
                        <option value='pseudo_code'>Pseudo Code</option>
                        <option value='short_answer'>Short Answer</option>
                        <option value='long_answer'>Long Answer</option>
                    </select>
                    <br/>
                    <br/>
                    Tags : 
                    <div className='ui input'>
                        <input type='text'/>
                    </div>
                    <br/>
                    <br/>
                    <button className='ui button'>Cancel</button>
                    <button className='ui button'>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddQuestion;