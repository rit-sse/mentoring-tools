import React, { Component } from 'react';

class TopBar extends Component{
    render(){
        return(
            <div style={{padding: '20px'}}>
                <h1>Exam Question Database</h1>
                <div className='ui three item menu'>
                    <a className='item' href='/add_question'>Add Question</a>
                    <a className='item' href='/review'>Review Questions</a>
                    <a className='item' href='/create_exam'>Create Exam</a>
                </div>
            </div>
        )
    }
}

export default TopBar;