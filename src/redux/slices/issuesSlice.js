import { createSlice } from "@reduxjs/toolkit";

export const issueSlice = createSlice({
    name: 'issues',
    initialState: {
        issues: [],
        isLoading: false,
        isLoadingEasy: false,
        isBeginnerFriendly: false,
    },
    reducers: {
        getIssuesFetch: (state) => {
            state.isLoading = true;
        },
        getIssuesSuccess: (state, action) => {
            state.issues = action.payload;
            state.isLoading = false;
            state.isBeginnerFriendly = false;
        },
        getEasyIssuesFetch: (state) => {
            state.isLoadingEasy = true;
        },
        getEasyIssuesSuccess: (state, action) => {
            state.issues = action.payload;
            state.isLoadingEasy = false;
            state.isBeginnerFriendly = true;
        },
        getIssuesError: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getIssuesFetch, getIssuesSuccess, getIssuesError, getEasyIssuesFetch, getEasyIssuesSuccess } = issueSlice.actions;

export default issueSlice.reducer;