import axios from 'axios';

// const api = process.env.REACT_APP_RECORDS_API_URL || "http://localhost:5000";
// const api = process.env.REACT_APP_RECORDS_API_URL || "http://5a7eeeeda768b10012a46eeb.mockapi.io";
const api = process.env.REACT_APP_RECORDS_API_URL || "http://www.henjifeng.cc:3001"
// export const getAll = () => {
// 	return axios.get(`${api}/api/v1/records`)
// }


//ES6箭头函数
// export const getAll = () => axios.get(`${api}/api/v1/records`);

// export const createRecord = (body) => axios.post(`${api}/api/v1/records`, body);

// export const updateRecord = (id, body) => axios.put(`${api}/api/v1/records/${id}`, body);

// export const deleteRecord = (id) => axios.delete(`${api}/api/v1/records/${id}`);

export const getAll = () => axios.get(`${api}/fmis/records.json`);

export const createRecord = (body) => axios.post(`${api}/fmis/records`, body);

export const updateRecord = (id, body) => axios.put(`${api}/fmis/records/${id}`, body);

// export const deleteRecord = (id, body) => axios.delete(`${api}/fmis/records/${id}`, body);
export const deleteRecord = (id, body) => {
	console.log(body)
	return axios({
		method: 'delete',
		url: `${api}/fmis/records/${id}`,
		data: body
	})
}

export const get_authenticity_token = () => $("meta[name=csrf-token]").attr("content");