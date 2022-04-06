import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const COUTER_VALUE = 'value'
export const COUNTER_ADD_VALUE = 'increment'

interface CounterState {
  [COUTER_VALUE]: number
}

const initialState: CounterState = {
  [COUTER_VALUE]: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    [COUNTER_ADD_VALUE]: state => {
      state[COUTER_VALUE] += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const couterSliceActions = counterSlice.actions
