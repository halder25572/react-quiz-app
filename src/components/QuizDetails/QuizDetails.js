import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizAns from '../QuizAns/QuizAns';

const QuizDetails = () => {
    const startQuiz = useLoaderData();
    console.log(startQuiz.data.questions);

    const {id, name} = startQuiz.data;
    return (
        <div className=''>
            {/* <h1 className='mt-4 text-5xl'>Start Quiz Now: {id}</h1> */}
            <h1 className='text-5xl my-8 font-bold'>Quiz of {name}</h1>
            {
                startQuiz.data.questions.map(quizAns => <QuizAns quizAns={quizAns}></QuizAns>)
            }
        </div>
    );
};

export default QuizDetails;