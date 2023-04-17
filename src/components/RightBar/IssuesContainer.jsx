import React from 'react'
import { useSelector } from 'react-redux'
import Issue from './Issue'

export default function IssuesContainer() {

    const issues = useSelector(state => state.issues.issues)


  return (
    <div className='w-[70%] h-full mt-4'>
        {issues.map(issue => (
            <Issue
                key={issue.title}
                title={issue.title}
                state={issue.state}
                date={issue.created_at}
                comments={issue.comments}
                link={issue.html_url}
                description={issue.body}
            />
        ))}
    </div>
  )
}
