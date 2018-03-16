import React, { Component } from 'react';


// //只用做显示数据统计 不参与数据计算  可以作为无状态组件  能提高速度
export default class RecordsStatistics extends Component {

	countAmount(){
		let expend = 0;
		let income = 0;
		const records = this.props.records;
		for(let j = 0, len=records.length; j < len; j++) {
			if (records[j].amount > 0){
				income += records[j].amount
			}else{
				expend += records[j].amount
			}
		}
		// console.log(expend, income);
		const currentStat = {
			expend: expend,
			income: income
		}
		// console.log(currentStat);
		return currentStat;
	}

	render(){
		const totalAmount = this.countAmount()
		return (
			<table className="table tr-1">
				<thead>
	            	<tr>
	            		<th>收入</th>
	            		<th>支出</th>
	            		<th>余额</th>
	            	</tr>
            	</thead>
            	<tbody>
	            	<tr>
		            	<td>
		            		<span>{totalAmount.income.toFixed(2)}</span>
		            	</td>
		            	<td>
		            		<span>{totalAmount.expend.toFixed(2)}</span>
		            	</td>
		            	<td>
		            		<span>{(totalAmount.income + totalAmount.expend).toFixed(2)}</span>
		            	</td>
		            </tr>
		        </tbody>
			</table>
		)
	}
}


//测试无状态组件
// const AmountBox = ({text, type, tom}) => {
// 	//括号里面参数的意思 参数名就是组件各个属性的名称  而且是一一对应的  顺序没有必要是一致的 只需要保证名称一致 就可以使用从其他组件传过来的属性
// 	console.log("AmountBox")
// 	console.log("text",text);
// 	console.log("type",type);
// 	console.log("tom",tom);
//     return (
//         <div className="col">
//             <div className="card">
//                 <div className={`card-header bg-${type} text-white`}> {text} </div>
//             </div>
//             <div className="card-body-">
//                 {tom}
//             </div>
//         </div>
//     )
// }

// export default AmountBox;