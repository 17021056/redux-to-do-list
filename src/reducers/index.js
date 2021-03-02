import { combineReducers } from "redux";
import tasks from './tasks';
import isdisplayform from './isdisplayform';
import isedittask from './isedittask';
import filtertable from './filtertable';
import searchtask from './searchtask';
import sorttask from './sorttask';

const myReducer = combineReducers({
    tasks, //tasks:tasks
    isdisplayform,
    isedittask,
    filtertable,
    searchtask,
    sorttask,
})

export default myReducer