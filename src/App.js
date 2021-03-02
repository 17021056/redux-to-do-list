import React, { Component } from 'react';
import ToDoListApp from './components/todolist/ToDoListApp';
// import demo from './trainning/demo';
//store
import { createStore } from 'redux';
import myReducer from './reducers';
import {Provider} from 'react-redux';
const store =createStore(myReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ToDoListApp/>
                </div>
            </Provider>
        );
    }
}

export default App;