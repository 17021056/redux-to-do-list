import React, { Component } from 'react';
import TableList from './TableList';
import '../../css/TableTask.css'
import {connect} from 'react-redux';
import * as action from '../../actions/index';

class TableTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterName: '',
            filterStatus :-1,
        }
    }
    _onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        var filter = {
            name : name ==='filterName' ? value : this.state.filterName,
            by : name ==='filterStatus' ? parseInt(value,10) : parseInt(this.state.filterStatus,10)
        }
        this.props.onFiterTable(filter)   
        this.setState({
            [name]: value,
        });
        
    }
    render() {
        let { tasks,filter,keywords,sort } = this.props
        let {filterName,filterStatus} = this.state
        if(filter){
            console.log(filter)
                if(filter.name){
                    tasks = tasks.filter((element,id)=>{
                        return element.name.toLowerCase().includes(filter.name.toLowerCase()) === true
                    })
                    console.log(filter.name)
                    console.log(tasks)
                }     
                tasks = tasks.filter((element,id)=>{
                    if(filter.by === -1){
                        return element 
                    }
                    else {
                        return element.status === (filter.by === 1 ? false : true )
                    }
                })
                
        }
        console.log(keywords.keywords)
        if(keywords.keywords!==""){
            tasks = tasks.filter((element,id)=>{
                return element.name.toLowerCase().includes(keywords.keywords.toLowerCase()) === true
            })
        }   
        if(sort.sortBy==='name'){
                tasks.sort((a,b)=>{
                    if(a.name>b.name)
                    return sort.sortValue;
                    else if(a.name<b.name)
                    return -sort.sortValue;
                    else
                    return 0;
                })
        } else {
                tasks.sort((a,b)=>{
                    if(a.status>b.status)
                    return -sort.sortValue;
                    else if(a.status<b.status)
                    return sort.sortValue;
                    else
                    return 0;
            })}
        const elmTasks = tasks.map((task,id) =>{
            return <TableList 
                    key={task.id} 
                    id={id} 
                    task={task}
                    />
        })
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0">
                <table className="table table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="filterName"
                                value={filterName}
                                onChange={this._onChange}
                                style={{fontSize:'1rem'}}/>
                            </td>
                            <td>
                                <select 
                                    className="form-control" 
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this._onChange}
                                >
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">complete</option>
                                    <option value="1">incomplete</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        tasks: state.tasks,
        filter: state.filtertable,
        keywords : state.searchtask,
        sort: state.sorttask
    }
}
const mapDispatchProps = (dispatch,state) => {
    return {
        onFiterTable: (filter)=>{
            dispatch(action.filterTask(filter))
        }
    }
}

export default connect(mapStatetoProps,mapDispatchProps)(TableTask);