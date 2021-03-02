import * as types from '../constants/ActionTypes'

var initialState = {
    id:'',
    name: '',
    status: false,
}
var myReducer = (state = initialState ,action) =>{
    switch(action.type){
        case types.EDIT_TASK :
            console.log(action)
            state = action.task
            return state
        case types.CLEAR_FORM : 
            return {
                id:'',
                name: '',
                status: false,
            }
        default: return state
    }
}

export default myReducer;