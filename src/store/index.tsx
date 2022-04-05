import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { counterSlice } from './couter.slice'
import { projectSlice } from './project.slice'

// export const rootReducer = {
//   kanbanList: projectSlice.reducer
// }

const store = configureStore({
  reducer: {
    kanbanList: projectSlice.reducer,
    counter: counterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
