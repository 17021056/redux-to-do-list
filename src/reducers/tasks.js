import * as types from '../constants/ActionTypes'
const s4 = () =>{
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1)
}
const generateId = () =>{
    return s4() + '-' + s4() + '-' + s4() +
     '-' +s4() + '-' + s4() + '-' + s4() + 
     '-' +s4() + '-' + s4() + '-' + s4() 
     
}
const _findIndex = (id,tasks) =>{
    let result = -1
    tasks.forEach((element,index) =>{
        if(element.id === id) {
            result = index
        }
    })
    return result
}
var data = JSON.parse(localStorage.getItem('tasks'))
var initialState = data ? data : []

var myReducer = (state = initialState ,action) =>{
    switch(action.type){
        case types.LIST_ALL :
            return state
        case types.SAVE_TASK :
            // console.log(action)
            var task = {
                id: action.task.id,
                name: action.task.name,
                status : (action.task.status === 'true'
                          || action.task.status === true) ? true : false
            }
            if(!action.task.id){
                task.id = generateId()
                state.push(task);
                localStorage.setItem('tasks',JSON.stringify(state));
            }else{
                const indexEdit =_findIndex(action.task.id,state)
                state[indexEdit] = task;
                console.log(state)
                localStorage.setItem('tasks',JSON.stringify(state));
            }
            return [...state] //copy array moi tra ve
        case types.UPDATE_STATUS_TASK :
            const index = _findIndex(action.id,state)
            // state[index].status = !state[index].status
            // C1
            // var prevState = {...state[index]}
            // prevState.status = !prevState.status
            // state[index] = prevState
            // C2
            state[index] = {
                ...state[index],
                status:!state[index].status
            }
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state]
        case types.DELETE_TASK :
            const indexDelete = _findIndex(action.id,state)
            state.splice(indexDelete,1)
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]
        default : return state
    }
}

export default myReducer;