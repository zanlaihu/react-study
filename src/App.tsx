import React from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './store'
import { couterSliceActions } from './store/couter.slice'
import { projectSliceActions } from './store/project-list.slice'

function App() {
  const counterValue = useAppSelector(state => state.counter.value)
  const pro = useAppSelector(state => state.kanbanList.projectType)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>{pro}</div>
      <div>
        <button
          onClick={() => {
            dispatch(projectSliceActions.changeProjectType('try'))
          }}
        >
          change
        </button>
      </div>
    </div>
  )
}

export default App
