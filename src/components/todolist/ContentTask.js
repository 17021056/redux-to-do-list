import React, { Component } from 'react';
import SearchTask from './SearchTask';
import SortTask from './SortTask';
import TableTask from './TableTask';
import {connect} from 'react-redux';
import * as action from '../../actions/index';

class ContentTask extends Component {
    _onToggleForm = () => {
        console.log(this.props.isedittask)
        if(this.props.display===false){
            this.props.onOpenForm()    
        }
        else if(this.props.display===true && !this.props.isedittask.id){
            this.props.onCloseForm()
        }
        this.props.onClearForm()
    }
    render() {
        
        const {  display   } = this.props // tuong duong voi tasks = this.state.tasks
        return (
            <div className={display===true ? "col-8" : "col-12"}>
                <button 
                type="button" 
                name="create"
                className="btn btn-primary mb-3"
                onClick={this._onToggleForm}
                >
                    <i className="fa fa-plus mr-2"></i>
                    Thêm Công Việc
                </button>
                <div className="row">
                    <SearchTask/>
                    <SortTask/>
                </div>
                <TableTask  />
            </div>
        );
    }
}
const mapStatetoProps = (state)=>{
      return {
          display : state.isdisplayform,
          isedittask : state.isedittask
      }  
}
const mapDispatchProps = (dispatch,props) => {
    return {
        onToggleForm : () =>{
            dispatch(action.toggleForm())
        },  
        onOpenForm : () =>{
            dispatch(action.openForm())
        } ,
        onClearForm : () =>{
            dispatch(action.clearForm())
        },
        onCloseForm : () =>{
            dispatch(action.closeForm())
        } ,
    } 
}
export default connect(mapStatetoProps,mapDispatchProps)(ContentTask);