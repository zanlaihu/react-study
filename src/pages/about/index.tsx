import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../store"
import { COUNTER_ADD_VALUE, couterSliceActions, COUTER_VALUE } from "../../store/couter.slice"
import { projectSliceActions } from "../../store/project.slice"

const About = () => {
    const counterValue = useAppSelector(state => state.counter[COUTER_VALUE])
    // const pro = useAppSelector(state => state.kanbanList.projectType)

    const dispatch = useAppDispatch()
  
    return (
      <div>
        <div>{counterValue}</div>
        <div>
          <button
            onClick={() => {
              dispatch(couterSliceActions[COUNTER_ADD_VALUE]())
            }}
          >
            add
          </button>
        </div>
        <Link to="/" >home</Link>
      </div>
    )
}

export default About
