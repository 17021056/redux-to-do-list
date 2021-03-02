import React, { Component } from 'react';
import '../../css/TableList.css'
import {connect} from 'react-redux';
import * as action from '../../actions/index';

class TableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevState : ''
        }
    }
    _onUpdateStatus =(e)=>{
        const {task}=this.props
        this.props.onUpdateStatus(task.id)
    };
    _onDeleteTask = (e) =>{
        const {task}=this.props
        this.props.onDeleteTask(task.id)
        this.props.onCloseForm()
    }
    _onSelectTask = (e) =>{
        if(!this.props.isedittask.id){
            this.props.onOpenForm()
            this.props.onEditTask(this.props.task)
            console.log(this.props.task.id)
            this.setState({
                prevState :this.props.task.id
            }) 
        }      
        else if(this.props.display && this.props.isedittask.id !== this.state.prevState){
            this.props.onEditTask(this.props.task)
            this.setState({
                prevState :this.props.task.id
            }) 
        }
        else if(this.props.display && this.props.isedittask.id=== this.state.prevState ){
            this.props.onCloseForm()
            this.props.onClearForm()
            this.setState({
                prevState :''
            }) 
        }
        
    }
    render() {
        const {task,id} = this.props
        return (
            <tr>
                <td>{id+1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={
                        task.status===true ? "label label-info" : "label label-danger"}
                        onClick={this._onUpdateStatus}
                    >{
                        task.status===true ? "complete" : "incomplete"  
                    }</span>
                </td>
                <td className="text-center p2">
                    <button 
                        type="submit" 
                        className="btn btn-warning mr-2 ml-2"
                        name="edit"
                        onClick={this._onSelectTask}
                    >
                        <span name="edit" className="fa fa-pencil  mr-2" aria-hidden="true"></span>
                        Sửa
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-danger mr-2 ml-2"
                        onClick={this._onDeleteTask}
                    >
                        <i className="fa fa-trash mr-2" aria-hidden="true"></i>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStatetoProps = (state)=>{
    return{
        display : state.isdisplayform,
        isedittask : state.isedittask
    }
}
const mapDispatchProps = (dispatch,props)=>{
    return {
        onUpdateStatus : (id)=>{
            dispatch(action.updateStatusTask(id))
        },
        onDeleteTask : (id)=>{
            dispatch(action.deleteTask(id))
        },
        onCloseForm : ()=>{
            dispatch(action.closeForm())
        },
        onOpenForm : () =>{
            dispatch(action.openForm())
        }, 
        onEditTask : (task) =>{
            dispatch(action.editTask(task))
        }  ,
        onClearForm : () =>{
            dispatch(action.clearForm())
        }
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(TableList);