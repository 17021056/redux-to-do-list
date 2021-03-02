import React, { Component } from 'react';
import ContentTask from './ContentTask';
import CreateTask from './CreateTask';
import '../../css/ToDOListApp.css'
import {connect} from 'react-redux';
class ToDoListApp extends Component {
    render() {
       
        const {display} = this.props;    
        const elmCreateTask = display === true ? 
        <CreateTask
        /> : null
        return (
            <div className="container">
                <div className="border-bottom mb-4">
                    <h1 className="text-center ">Quản Lý Công Việc</h1>
                </div>
                <div className="row">
                    {elmCreateTask}
                    <ContentTask 
                    _onSearch={this._onSearch}
                    _onSort={this._onSort}
                />
                </div>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return{
        display : state.isdisplayform
    } 
}
const mapDispatchProps = () => {
    return {
        
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(ToDoListApp);