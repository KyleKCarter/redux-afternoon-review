import {createStore} from 'redux'

//state
const initialState = {
    tvShow: '',
    mainCharacter: '',
    list: []
}

//constants
export const UPDATE_STATE = 'UPDATE_STATE';
export const ADD_SHOW = 'ADD_SHOW';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

//reducer
function reducer(state=initialState, action) {
    const {type, payload, stateKey} = action
    switch(type) {
        case UPDATE_STATE:
            return {
                ...state,
                [stateKey]: payload
            };
        case ADD_SHOW:
            const {tvShow, mainCharacter} = state
            const show = {tvShow, mainCharacter}
            const showList = [...state.list, show]
            return {
                ...state,
                list: showList
            }
        case CLEAR_FIELDS:
            return {
                ...state,
                tvShow: '',
                mainCharacter: ''
            }
        default:
            return state
    }
}

export default createStore(reducer)