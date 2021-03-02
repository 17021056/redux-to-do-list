import * as types from '../constants/ActionTypes'

var initialState = {
    name: '',
    by: -1,
}
var myReducer = (state = initialState ,action) =>{
    switch(action.type){
        
        case types.FILTER_TABLE :
            var state = {
                name: action.filter.name,
                by: action.filter.by,
            }
            console.log(state)
            return state
        default: return state
    }
}

export default myReducer;