import React, {Component} from 'react'

class add_question extends Component{
    render(){
        return(
            <div>
                <form>
                    Quesion :  
                    <input type='text'/>
                    <br/>
                    <br/>
                    Answer : 
                    <input type='text'/>
                    <br/>
                    <br/>
                    Type : 
                    <select>
                        <option value=''>Select One</option>
                        <option value='multiple_choice'>Multiple Choice</option>
                        <option value='matching'>Matching</option>
                        <option value='pseudo_code'>Pseudo Code</option>
                        <option value='short_answer'>Short Answer</option>
                        <option value='long_answer'>Long Answer</option>
                        <option value='multiple_choice'>Multiple Choice</option>
                    </select>
                    {/* <input type='select'/> */}
                    <br/>
                    <br/>
                    Tags : 
                    <input type='text'/>
                    <br/>
                    <br/>
                    <button>Cancel</button>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default add_question;