import {
	GET_ALL_CONTACTS_INIT ,
	GET_ALL_CONTACTS_SUCCESS,
	GET_ALL_CONTACTS_FAIL
} from '../common/actionConstants'

import { dev } from '../../config/config.json'

export default {
	getAllContacts: () =>
		(dispatch, getState, axios) => {
			// here we can do our async calls if fetching contacts from server
			// then can dispatch respective action to change the state with new contact list
		}
}