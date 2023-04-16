import { configureStore } from "@reduxjs/toolkit"
import saga from "../saga/saga"
import issueSaga from "../saga/issueSaga";
import issuesReducer from '../slices/issuesSlice'
import { categorySlice } from '../slices/categorySlice'
import issuesEasySaga from "../saga/issueEasySaga";
import { all } from "redux-saga/effects";

const combinedSagas = function* () {
    yield all([
      issueSaga(),
      issuesEasySaga()
    ]);
  };


const store = configureStore({
    reducer: {
        issues: issuesReducer,
        category: categorySlice.reducer
    },
    middleware: [saga]
});

saga.run(combinedSagas)

export default store