import React, { useState } from 'react';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizAns = ({quizAns}) => {
    const {id, correctAnswer, question, options} = quizAns;

    // const [correct, setCorrect] = useState('');
    // console.log(correct.length);

    // eye icon click work
    const correctAns = () => {
        alert(correctAnswer);
    }

    const quizCorrect = () => {
         const exist = options === 1;
         if(exist){
             alert('True');
         }
        // else if(options.find !== correctAnswer){
        //     alert('False');
        // }
    }

    return (
        <div className='mt-4 py-4'>
            <div className="customWidth container mx-auto p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="correctBtn float-right">
                <FontAwesomeIcon onClick={correctAns} className='cursor-pointer ml-4' icon={faEye}></FontAwesomeIcon>
            </div>
                <h5 className="mb-2 text-3xl font-bold dark:text-white text-blue-600">{question}</h5>
                    <div className="text-blue-600 mb-5 text-base sm:text-lg dark:text-gray-400 grid grid-rows-2 grid-flow-col gap-2">
                        {
                            // 'mr-8 cursor-pointer' class for input
                            options.map(list => <li className='list-none border py-8 m-4 rounded pl-8'><input onClick={quizCorrect} className ="mr-8 cursor-pointer" type="radio" name='radio'/>{list}</li>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default QuizAns;