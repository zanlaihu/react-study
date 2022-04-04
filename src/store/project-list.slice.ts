import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    projectModal: boolean;
    projectType: string;
}

const initialState: State = {
    projectModal: true,
    projectType: "string"
}

export const projectSlice = createSlice({
    name: "projectSlice",
    initialState,
    reducers: {
        openProject(state) {
            state.projectModal = true
        },
        closeProject(state) {
            state.projectModal = false
        },
        changeProjectType(state, action: PayloadAction<string>){
            state.projectType = action.payload
        }
    }
})

export const projectSliceActions = projectSlice.actions