import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../../actions/index';

class SearchTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keywords: '',
        }
    }
    _onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value,
        });
    }
    _onSearch = (e) => {
        this.props.onSearchTask(this.state.keywords)
    }
    render() {
        return (
            <div className="col-6 input-group mb-3">
                <input type="text" 
                className="form-control" 
                placeholder="Nhập từ khóa"
                name="keywords" 
                onChange={this._onChange}
                value={this.state.keywords}
                style={{fontSize:'1rem'}}
                />
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-primary" 
                    onClick={this._onSearch}
                    type="button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = ()=>{
    return {}
}
const mapDispatchProps =(dispatch, props) =>{
    return {
        onSearchTask : (keywords) => {
            dispatch(action.searchTask(keywords))
        }
    }
}
export default connect(mapStatetoProps,mapDispatchProps)(SearchTask);