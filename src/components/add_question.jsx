import React, {Component} from 'react'
import FileDrop from 'react-file-drop'

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
                    Images :
                    <div className='ui centered grid'>
                        <div className='ui segment centered' style={{width: '50%', padding: '2%', margin: '2%'}}>
                            <FileDrop>
                            Drop any images here.
                            </FileDrop>
                        </div>
                    </div>
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default AddQuestion;