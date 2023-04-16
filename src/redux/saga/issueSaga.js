import { call, put, takeEvery, select } from 'redux-saga/effects'

import { getIssuesSuccess } from '../slices/issuesSlice'

function* workGetIssuesFetch(action) {
    const category = yield select(state => state.category.category);
    const issue = action.payload.issue
    const issues = yield call(() => fetch(`https://api.github.com/search/issues?q=${issue}+label:${category}+state:open
    `));
    const formattedIssues = yield issues.json()
    console.log(formattedIssues)
    const shortenedIssues = yield formattedIssues.items.slice(0, 30);
    yield put(getIssuesSuccess(shortenedIssues))
  }
  
  function* issueSaga() {
    yield takeEvery('issues/getIssuesFetch', workGetIssuesFetch)
  }
  
  export default issueSaga;