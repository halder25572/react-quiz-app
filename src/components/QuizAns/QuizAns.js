// import React, { useState } from 'react';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from 'react-router-dom';


const QuizAns = ({quizAns}) => {
const {id, correctAnswer, question, options} = quizAns;

// eye icon click work
const correctAns = () => {
    alert(correctAnswer);
}

// click radio button for correct answer
  const quizCorrect = (id) => {
    id === correctAnswer ? alert("True") : alert("False");

    const exists = options.find(options => options === correctAnswer);
    if(exists){
        alert(`True`);
    }
    else{
        alert(`False`);
    }
}


return (
    <div className='mt-4 py-4'>
        <div className="md:container mx-auto p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="correctBtn float-right">
            <FontAwesomeIcon className='cursor-pointer ml-4' icon={faEye}></FontAwesomeIcon>
        </div>
            <h5 className="mb-2 md:text-3xl font-bold dark:text-white text-blue-600">{question}</h5>
                <div className="text-blue-600 mb-5 text-base sm:text-lg dark:text-gray-400 md:grid md:grid-rows-2 md:grid-flow-col md:gap-2">
                    {
                        // 'mr-8 cursor-pointer' class for input
                        // list-none border py-8 m-4 rounded pl-8 for li
                        options.map(list => <li list={list} onClick={() => quizCorrect(list)} key={list.id} className='list-none border py-8 m-4 rounded' ><input onClick={quizCorrect} className = "mr-8 cursor-pointer" type="radio" name='radio'/>{list}</li>)
                    }
                </div>
        </div>
    </div>
);
};

export default QuizAns;
