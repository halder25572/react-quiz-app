import React from 'react';
import ReactDOM from 'react-dom'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizAns = ({quizAns}) => {
    const {id, correctAnswer, question, options} = quizAns;
    return (
        <div className='mt-4 py-4'>
            <div className="customWidth container mx-auto p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="correctBtn float-right">
                <FontAwesomeIcon className='cursor-pointer ml-4' icon={faEye}></FontAwesomeIcon>
            </div>
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-blue-600">{question}</h5>
                    <div className="text-blue-600 mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 grid grid-rows-2 grid-flow-col gap-2">
                        <p className='border py-8 m-4 p-8 rounded'><input className='mr-8' type="radio" name='radio'/>{options[0]}</p>
                        <p className='border py-8 m-4 rounded'><input className='mr-8' type="radio" name='radio' />{options[1]}</p>
                        <p className='border py-8 m-4 rounded'><input className='mr-8' type="radio" name='radio' />{options[2]}</p>
                        <p className='border py-8 m-4 rounded'><input className='mr-8' type="radio" name='radio' />{options[3]}</p>
                    </div>
            </div>

        </div>
    );
};

export default QuizAns;