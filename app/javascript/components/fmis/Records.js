import React, { Component } from 'react';
import PropTypes from "prop-types"
import Record  from './Record';
import * as RecordsAPI from '../untils/RecordsAPI'; //星号映入所有
import RecordForm from './RecordForm';
import RecordsStatistics from './RecordsStatistics';
// import AmountBox from './RecordsStatistics';

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      records:[]
    }
  }

  //没有采用环境变量的写法
  //节点被挂载之后的回调函数
  // componentDidMount(){
  //   axios.get('https://5a7eeeeda768b10012a46eeb.mockapi.io/api/v1/records').then(
  //     response => this.setState({
  //       records: response.data,
  //       isLoaded: true})
  //     ).catch(
  //     error => this.setState({
  //       isLoaded: true,
  //       error: error
  //     })
  //     // console.log(error.message);
  //   );
  // }

// //使用环境变量的写法
//   componentDidMount(){
//     axios.get(`${RecordsAPI.api}/api/v1/records`).then(
//       response => this.setState({
//         records: response.data,
//         isLoaded: true})
//       ).catch(
//       error => this.setState({
//         isLoaded: true,
//         error: error
//       })
//       // console.log(error.message);
//     );
//   }

// 代码重构
  componentDidMount(){
    RecordsAPI.getAll().then(
      response => {
        console.log(response)
        this.setState({
        records: response.data,
        isLoaded: true})
        }
      ).catch(
      error => this.setState({
        isLoaded: true,
        error: error
      })
      // console.log(error.message);
    );
  }

  addRecord(record){
    console.log(record);
    this.setState({
      error: null,
      isLoaded: true,
      records:[
        ...this.state.records,
        record
      ]
    })
  }

  updateRecord(record, data){
    const RecordIndex = this.state.records.indexOf(record);
    const newRecords = this.state.records.map( (item, index) => {
        if(index !== RecordIndex) {
            // This isn't the item we care about - keep it as-is
            return item;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...data
        };    
    });
    //更新父组件状态
    this.setState({
      records: newRecords
    })
  }


  deleteRecord(record){
    const RecordIndex = this.state.records.indexOf(record);
    // const newRecords = this.state.records.map( (item, index) => {
    //     if(index !== RecordIndex) {
    //         // This isn't the item we care about - keep it as-is
    //         return item;
    //     }

    //     // Otherwise, this is the one we want - return an updated value
    //     return {
    //         ...item,
    //         ...data
    //     };    
    // });
    // const newRecords = 
    // this.state.records.splice(RecordIndex, 1); //更新state

    const newRecords =  this.state.records.filter( (item, index) => index !== RecordIndex);

    // console.log(newRecords);
    // console.log(this.state.records);

    //更新父组件状态
    this.setState({
      records: newRecords
    })
  }


  render() {
    const {error, isLoaded, records} = this.state;
    let recordsComponent;
    if(error){
      recordsComponent = <div> Error: {error.message} </div>;
    } else if(!isLoaded){
      recordsComponent =  <div>Loading</div>;
    } else{
        recordsComponent =  (
          <table className="table table-bordered table-hover">
            <thead>
             <tr>
              <th>Date</th>
              <th>Title</th>
              <th>amount</th>
              <th>Actions</th>
             </tr>
            </thead>
            <tbody>
              {
              records.map((record => <Record key={record.id} record={record} handleUpdate={this.updateRecord.bind(this)} handleDelete={this.deleteRecord.bind(this)}/>)) 
              //records.map((record) => <Record key={record.id} date={record.date} title={record.title} amount={record.amount}/>)
             }

            </tbody>
          </table>
        );
    }

    return (
       <div>
        <h2>Records</h2>
        <RecordsStatistics records={this.state.records} />
        <RecordForm handlecreate={this.addRecord.bind(this)} />
        {recordsComponent}
       </div>
      );

    // //验证问题15
    //   return (
    //    <div>
    //     <h2>Records</h2>
    //     <div>
    //       <AmountBox   type=
    //       {"danger"} value={23} text={"123"}/>
    //     </div>
    //     <RecordForm handlecreate={this.addRecord.bind(this)} />
    //     {recordsComponent}
    //    </div>
    //   );
    
  }
}

Records.propTypes = {
  error: PropTypes.object,
  isLoaded: PropTypes.bool,
  records: PropTypes.array
};
export default Records

