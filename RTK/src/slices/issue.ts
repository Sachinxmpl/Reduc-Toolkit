import {createSlice , PayloadAction} from '@reduxjs/toolkit'

export interface IssueInitailState {
    projectIssues : string[]
}

const initialState : IssueInitailState = {
    projectIssues : []
}

export const issueSlice = createSlice({
    name : "issue" , 
    initialState ,
    reducers : {
        addIssue : (state , action : PayloadAction<string>) => {
            state.projectIssues.push(action.payload)
        }
    }

})


export const {addIssue} = issueSlice.actions
export default issueSlice.reducer 