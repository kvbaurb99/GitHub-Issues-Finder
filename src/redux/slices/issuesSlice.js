import { createSlice } from "@reduxjs/toolkit";

export const issueSlice = createSlice({
    name: 'issues',
    initialState: {
        issues: [],
        isLoading: false,
    },
    reducers: {
        getIssuesFetch: (state) => {
            state.isLoading = true;
        },
        getIssuesSuccess: (state, action) => {
            state.issues = action.payload;
            state.isLoading = false;
        },
        getIssuesError: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getIssuesFetch, getIssuesSuccess, getIssuesError } = issueSlice.actions;

export default issueSlice.reducer;