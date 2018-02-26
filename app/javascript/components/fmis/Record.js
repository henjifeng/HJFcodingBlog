import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../untils/RecordsAPI';

// 第一种方法速度 很慢
// class Record extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       key: props.id,
//       date: props.date,
//       title: props.title,
//       amount: props.amount 
//     }
//   }
//   render() {
//     return (
//       <tr key={this.state.key}>
//       	<td>{this.state.date}</td>
//       	<td>{this.state.title}</td>
//       	<td>{this.state.amount}</td>
//       </tr>
//     );
//   }
// }


// 第二种方法  速度较慢
// class Record extends Component {
//   render() {
//     return (
//       <tr key={this.props.id}>
//         <td>{this.props.date}</td>
//         <td>{this.props.title}</td>
//         <td>{this.props.amount}</td>
//       </tr>
//     )
//   }
// }


// export default Record;





export default class Record extends Component {

  constructor() {
    super();
    this.state = {
      edit: false
    }
  }

  recordEditForm(){
    return (
      <tr key={this.props.record.id}>
        <td>
           <input type="text" className="form-control" name="date" defaultValue={this.props.record.date} ref="date"/>          
        </td>
        <td>
           <input type="text" className="form-control" name="title" defaultValue={this.props.record.title} ref="title"/>
        </td>
        <td>
           <input type="text" className="form-control" name="amount" defaultValue={this.props.record.amount} ref="amount"/>
        </td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleUpdateRecord.bind(this)}>更新</button>
          <button className="btn btn-danger" onClick={this.handleEditForm.bind(this)}>取消</button>
        </td>
      </tr>
    )
  }

  // 更新
  handleUpdateRecord(event){
    event.preventDefault();
    const record = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      amount: Number.parseInt(this.refs.amount.value, 0), //服务器要的是整形
      authenticity_token: RecordsAPI.get_authenticity_token()
    }
    RecordsAPI.updateRecord(this.props.record.id, record).then(
      response => {
        this.setState({
          edit: false
        })
        this.props.handleUpdate(this.props.record, response.data)
      }
    ).catch(
    error => console.log(error.message)
    )
  }

  //删除
  handleDeleteRecord(event){
    event.preventDefault();
    RecordsAPI.deleteRecord(this.props.record.id, {authenticity_token: RecordsAPI.get_authenticity_token()}).then(
      response => {
        // console.log(response)
        this.props.handleDelete(this.props.record)
      }
    ).catch(
    error => console.log(error.message)
    )
  }



  //更新是否可编辑状态   其实变为可编辑状态的时候应该向后台再请求最新的数据
  handleEditForm(){
    this.setState({
      edit: !this.state.edit
    })
  }

  recordForm(){
    return (
      <tr key={this.props.record.id}>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{this.props.record.amount}</td>
        <td>
          <button className="btn btn-info mr-1" onClick={this.handleEditForm.bind(this)}>编辑</button>
          <button className="btn btn-danger" onClick={this.handleDeleteRecord.bind(this)}>删除</button>
        </td>
      </tr>
    )
  }

  render() {
    if (this.state.edit){
      return this.recordEditForm()
    }else{
      return  this.recordForm();
    }
  }
}





Record.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	date: PropTypes.string,
	amount: PropTypes.number
}
