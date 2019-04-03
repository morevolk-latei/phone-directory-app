import {
	GET_ALL_CONTACTS_INIT ,
	GET_ALL_CONTACTS_SUCCESS,
	GET_ALL_CONTACTS_FAIL
} from '../common/actionConstants'


const initialState = {
	allContactsList: [],
	filterContactList: [],
	fetchingAllcontacts: false
}

export default function restaurant(state = initialState, action) {
	const { type, payload } = action

	switch(type) {
		case GET_ALL_CONTACTS_INIT:
			return { ...state, fetchingAllcontacts: true }
		case GET_ALL_CONTACTS_SUCCESS:
			return { ...state, fetchingAllcontacts: false, allContactsList: payload }
		case GET_ALL_CONTACTS_FAIL:
			return { ...state, fetchingAllcontacts: false, allContactsList: [] }
		default:
			return { ...state }
	}
}