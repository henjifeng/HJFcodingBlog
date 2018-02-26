import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../untils/RecordsAPI'; //星号映入所有
import $ from 'jquery';


class RecordForm extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     error: null,
  //     date: null,
  //     tittle: null,
  //     amount: null
  //   }
  // }
  // 上面这种写法对input是错的
  // Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.
  //   in input (at RecordForm.js:41)
  //   in div (at RecordForm.js:40)
  //   in form (at RecordForm.js:39)
  //   in RecordForm (at Records.js:94)
  //   in div (at Records.js:92)
  //   in Records (at index.js:8)

  //重写方法
  constructor(props){
    super(props);
    this.state = {
      date: "",
      title: "",
      amount: ""
    }
  }

  valid(){
    return this.state.date && this.state.title && this.state.amount
  }

  handleChange(event){
    // console.log(event);
    // console.log(event.target);
    let name, obj;
    name = event.target.name;
    this.setState((
      obj = {},//初始化
      obj["" + name] = event.target.value, //赋值
      obj //返回
      ))
    // this.setState();
  }

  //获取提交数据
  handleSumbit(event){
    event.preventDefault();
    //提交ajsx
    const data = {
      date: this.state.date,
      title: this.state.title,
      amount: Number.parseInt(this.state.amount, 0), // 格式转化
      // authenticity_token: $("meta[name=csrf-token]").attr("content")
      authenticity_token: RecordsAPI.get_authenticity_token()

    }
    RecordsAPI.createRecord(data).then(
      // response => console.log(response.data)
      response => {
        this.props.handlecreate(response.data)
        this.setState({
          date: "",
          title: "",
          amount: ""
        })
      }
    ).catch(
      error => console.log(error.message)
    )
  }

  render() {
    // const {disabled, error, date, title, amount} =  this.state;
    // const error = this.state.error;
    const error = null;
    let recordFormComponent;

    if (error){
      recordFormComponent =  <div>Error: {error}</div>;
    } else {
      recordFormComponent = (
        <form className="form-inline mb-3" onSubmit={this.handleSumbit.bind(this)} >
          <div className="form-group mr-1">
           <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="日期" name="date" value={this.state.date} />
          </div>
          <div className="form-group mr-1">
           <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="标题" name="title" value={this.state.title} />
          </div>
          <div className="form-group mr-1">
           <input type="text" className="form-control" onChange={this.handleChange.bind(this)} placeholder="金额" name="amount" value={this.state.amount} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.valid()} >创建记录</button>
        </form>
      );
    }


    return (
      //不能用JSX语法了  {recordFormComponent}
      recordFormComponent
    );
  }
}


export default RecordForm;

RecordForm.propTypes = {
	title: PropTypes.string,
	date: PropTypes.string,
	amount: PropTypes.number
}
