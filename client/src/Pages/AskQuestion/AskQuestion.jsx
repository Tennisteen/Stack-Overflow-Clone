import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../actions/question'

import './AskQuestion.css'

const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result._id }, navigate))
     }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + "\n")
        }
    }
    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask-form-container">
                    <label htmlFor='ask-ques-title'>
                     <h4>Title</h4>
                     <p>Be specific and imagine you're asking a question to another person</p>
                     <input type='text' name='questionTitle' id='ask-ques-title' placeholder='e.g. what is static class in c++' onChange={(e) => { setQuestionTitle(e.target.value) }}></input>
                  </label>

                  <label htmlFor='ask-ques-body'>
                     <h4>Body</h4>
                     <p>Include all the information someone would need to answer your question</p>
                     <textarea id='ask-ques-body' name='questionBody' onChange={(e) => { setQuestionBody(e.target.value) }} onKeyPress={handleEnter}></textarea>
                  </label>

                  <label htmlFor='ask-ques-tags'>
                     <h4>Tags</h4>
                     <p>Add upto 5 tags to describe what your question is about</p>
                     <input type='text' name='questionTags' id='ask-ques-tags' placeholder='e.g. c c++ c# java' onChange={(e) => { setQuestionTags(e.target.value.split(" ")) }}></input>
                  </label>
                    </div>
                    <input type="submit" value='Reivew your question' className='review-btn' />
                </form>
            </div>
        </div>
    )
}

export default AskQuestion
