import * as types from '../constants/ActionTypes'

var initialState = {
    keywords: ''
}
var myReducer = (state = initialState ,action) =>{
    switch(action.type){
        case types.SEARCH_TASK :
            return{
                keywords : action.keywords
            }
        default: return state
    }
}

export default myReducer;