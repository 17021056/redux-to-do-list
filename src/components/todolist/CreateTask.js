import React, { Component } from 'react';
import '../../css/CreateTask.css'
import {connect} from 'react-redux'
import * as action from '../../actions/index';
class CreateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name: '',
            status: false,
            isediting : false,
        }
    }
    componentDidMount(){
        const {isedittask} = this.props
        if(isedittask && isedittask.id!==null){
            this.setState({
                    id:isedittask.id,
                    name : isedittask.name,
                    status : isedittask.status,
                    isediting : true
            })
        }
        else {
            this._onClear()
        }
        
    }
    componentWillUpdate(nextProps,nextState) {
        if(nextProps.isedittask.id === '' && this.state.isediting===true) {
            console.log('oke')
            this.setState({
                id:'',
                name: '',
                status: false,
                isediting : false,
            })
        } else if(nextProps.isedittask.id !== '' && this.state.isediting===false) {
            const {isedittask} = this.props
            if(isedittask && isedittask.id!==null){
                this.setState({
                        id:isedittask.id,
                        name : isedittask.name,
                        status : isedittask.status,
                        isediting : true
                })
            }
        }
        else if(nextProps.isedittask.id !== this.state.id && this.state.isediting===true){
            const {isedittask} = this.props
            if(isedittask && isedittask.id!==null){
                this.setState({
                        id:isedittask.id,
                        name : isedittask.name,
                        status : isedittask.status,
                        isediting : true
                })
            }
        }
    }
    componentWillUnmount(){
        this._onClear()
    }
    _onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name] : value
         }
        )
    }
    
    _onSubmit = (e) => {
        e.preventDefault()
        this.props.onSaveTask(this.state)
        this.props.onClearForm()
        this.props.onCloseForm()
    }
    _onClear = (e) => {
        console.log('oke')
        this.setState({
            id:'',
            name :'',
            status : '',
        })
    }
    _onCloseForm = (e) => {
        this.props.onCloseForm()
        this._onClear()
    }
    render() {
        return (
            <div className="col-4 d">
                <div className="card">
                    <div className="card-body p-0">
                    <h6 className="card-title p-3 border-bottom"
                        style={{backgroundColor:'rgb(252,248,227)'}}
                    >
                        {!this.state.id ? 'Thêm Công Việc' : 'Cập Nhật Công Việc'}
                        <span
                        onClick={this._onCloseForm} className="fa fa-times-circle float-right" ></span>
                    </h6>
                    <div className="p-3">
                        <form 
                        className="form-group"
                        onSubmit={this._onSubmit}
                        >
                            <div className="mb-2">
                                <h6>Tên :</h6>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                required
                                value={this.state.name}
                                style={{fontSize:'1rem'}}
                                onChange={this._onChange}
                                />
                            </div> 
                            <div className="mb-4">
                                <h6>Trạng Thái :</h6> 
                                <select 
                                className="form-control" 
                                name="status"
                                value={this.state.status}
                                onChange={this._onChange}
                                required
                                >
                                    <option value="">-select-</option>
                                    <option value={true}>complete</option>
                                    <option value={false}>incomplete</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-around text-center">
                                    <button type="submit" className="btn btn-warning">
                                        <span className="fa fa-plus mr-2"></span>
                                        Lưu Lại
                                    </button>
                                    <button type="button" className="btn btn-danger"
                                    onClick ={this._onClear}
                                    >
                                        <span className="fa fa-close mr-2"></span>
                                        Hủy Bỏ
                                    </button>
                            </div>
                        </form> 
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = state =>{
    return {
        isedittask : state.isedittask   
    }
}
const mapDispatchProps = (dispatch,props) =>{
    return {
        onSaveTask : task =>{
            dispatch(action.saveTask(task))
        },
        onCloseForm : () =>{
            dispatch(action.closeForm())
        },
        onClearForm : () =>{
            dispatch(action.clearForm())
        },
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(CreateTask);