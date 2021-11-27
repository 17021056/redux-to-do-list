import * as types from '../constants/ActionTypes'

var initialState = {
    name: '',
    by: -1,
}
var myReducer = (state = initialState ,action) =>{
    switch(action.type){
        
        case types.FILTER_TABLE :
            var stateNew = {
                name: action.filter.name,
                by: action.filter.by,
            }
            return stateNew
        default: return state
    }
}

export default myReducer;