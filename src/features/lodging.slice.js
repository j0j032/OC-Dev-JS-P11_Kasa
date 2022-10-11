import {createSlice} from '@reduxjs/toolkit'

const lodgingsSlice = createSlice({
	name: 'lodgings',
	initialState: {
		lodgings: null
	},
	reducers: {
		setLodgingsData: (state, {payload}) => {
			state.lodgings = payload
		}
	}
})

export const {setLodgingsData} = lodgingsSlice.actions
export default lodgingsSlice.reducer
