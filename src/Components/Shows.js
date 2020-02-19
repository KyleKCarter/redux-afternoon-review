import React, {Component} from 'react';
import store, {UPDATE_STATE, ADD_SHOW, CLEAR_FIELDS} from './../Redux/store';
import {Link} from 'react-router-dom';

class Shows extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        store.dispatch({
            type: UPDATE_STATE,
            payload: e.target.value,
            stateKey: e.target.name
        })
    }

    handleClick() {
        store.dispatch({
            type: ADD_SHOW
        })
    }

    render() {
        return (
            <div>
                <h1>Add Show</h1>
                <input placeholder='tv show title' type="text" name="tvShow" onChange={this.handleChange} />
                <input placeholder='tv show main character' type="text" name="mainCharacter" onChange={this.handleChange} />
                <Link to='/'><button onClick={this.handleClick}>Add Show</button></Link>
            </div>
        )
    }
}

export default Shows