import { configureStore } from "@reduxjs/toolkit"
import saga from "../saga/saga"
import issueSaga from "../saga/issueSaga";
import issuesReducer from '../slices/issuesSlice'
import { categorySlice } from '../slices/categorySlice'


const store = configureStore({
    reducer: {
        issues: issuesReducer,
        category: categorySlice.reducer
    },
    middleware: [saga]
});

saga.run(issueSaga)

export default store