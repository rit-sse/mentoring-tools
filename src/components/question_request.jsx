import React, {Component} from 'react';
import { Dropdown } from 'semantic-ui-react'

class QuestionRequest extends Component{
    state = {
        selectedOption: '',
        itemNum : -1
    }
    constructor(props){
        super(props)
        this.state.selectedOption = ''
        this.state.itemNum = this.props.item
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    render(){
        return(
            <div className='ui centered grid' style={{padding: '5px'}}>
                <div className='ui segments' style={{width: '80%', padding: '5px'}}>
                    <div style={{width: '100%', display: 'flex'}}>
                        <div style={{flex: '1 1 auto', width: '33%'}}>
                            Tag : 
                            <Dropdown placeholder='Tags' fluid multiple selection options = {[{key: 'one', text: '1', value: 'notOne'}, {key: 'two', text: '2', value: 'One'}]}/>
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
                        <div className='ui steps' style={{backgroundColor: 'red', margin: '10px', width: '65px', height: '65px', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
                                <i className="far fa-trash-alt fa-4x"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionRequest