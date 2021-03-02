import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/index';

class SortTask extends Component {
    _onClickDropdown = (sortBy,sortValue) =>{
        var sort ={
            sortBy : sortBy,
            sortValue : sortValue
        }
        this.props.onSortTask(sort)
    }
    render() {
        const {sortTask}=this.props
        return (
            <div className="col-6 input-group mb-3">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sắp xếp
                    </button>
                    <div className="dropdown-menu">
                        <a 
                        onClick={() =>this._onClickDropdown('name',1)} 
                        className={( sortTask.sortBy==='name' && sortTask.sortValue===1) ? "dropdown-item sort_selected" : "dropdown-item"  }
                        href="#"
                        >
                            <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                            <span> Tên A-Z</span>
                        </a>
                        <a 
                        onClick={() =>this._onClickDropdown('name',-1)} 
                        className={( sortTask.sortBy==='name' && sortTask.sortValue===-1) ? "dropdown-item sort_selected" : "dropdown-item"  }
                        href="#"
                        >
                            <i className="fa fa-sort-alpha-desc" aria-hidden="true"></i>
                            <span> Tên Z-A</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a  
                        onClick={() =>this._onClickDropdown('status',1)} 
                        className={( sortTask.sortBy==='status' && sortTask.sortValue===1) ? "dropdown-item sort_selected" : "dropdown-item"  }
                        href="#"
                        >complete</a>
                        <a  
                        onClick={() =>this._onClickDropdown('status',-1)} 
                        className={( sortTask.sortBy==='status' && sortTask.sortValue===-1) ? "dropdown-item sort_selected" : "dropdown-item"  }
                        href="#"
                        >incomplete</a>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps =(state)=>{
    return{
        sortTask : state.sorttask
    }
}
const mapDispatchProps = (dispatch,props)=>{
    return {
        onSortTask :  (sort) =>{
            dispatch(action.sortTask(sort))
        }
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(SortTask);