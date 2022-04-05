import { Link } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../store"
import { projectSliceActions } from "../../store/project-list.slice"

const About = () => {
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
        <Link to="/" >home</Link>
      </div>
    )
}

export default About
