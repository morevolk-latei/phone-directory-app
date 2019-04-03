import {
	GET_ALL_CONTACTS_INIT ,
	GET_ALL_CONTACTS_SUCCESS,
	GET_ALL_CONTACTS_FAIL
} from '../common/actionConstants'

import { dev } from '../../config/config.json'

export default {
	getAllContacts: () =>
		(dispatch, getState, axios) => {
			// dispatch({ type: GET_ALL_CONTACTS_INIT })

			// axios.get(`${dev.base_url}restaurant/all`)
			// 	.then(res => {
			// 		// console.log(res)
			// 		dispatch({ type: GET_ALL_CONTACTS_SUCCESS, payload: res.data.data })
			// 	})
			// 	.catch(err => {
			// 		console.error(err)
			// 		dispatch({ type: GET_ALL_CONTACTS_FAIL, payload: err.response })
			// 	})
		}
}