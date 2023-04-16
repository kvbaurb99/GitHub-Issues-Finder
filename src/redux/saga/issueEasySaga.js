import { call, put, select, takeEvery } from "redux-saga/effects";

import { getEasyIssuesSuccess } from "../slices/issuesSlice";

function* workGetEasyIssues() {
    const category = yield select(state => state.category.category)
    const issues = yield call(() => fetch(`https://api.github.com/search/issues?q=label:${category}+state:open+label:%22good%20first%20issue%22`));
    const formattedIssues = yield issues.json();
    const shortenedIssues = yield formattedIssues.items.slice(0, 30);
    yield put (getEasyIssuesSuccess(shortenedIssues))
}

function* issuesEasySaga() {
    yield takeEvery('issues/getEasyIssuesFetch', workGetEasyIssues)
}

export default issuesEasySaga