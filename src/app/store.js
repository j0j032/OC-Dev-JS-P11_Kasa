import {configureStore} from '@reduxjs/toolkit'
import lodgingsReducers from '../features/lodging.slice'

export default configureStore({
	reducer: {
		lodgings: lodgingsReducers
	}
})
