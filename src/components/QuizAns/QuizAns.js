import React from 'react';
import { Link } from 'react-router-dom';

const QuizAns = ({quizAns}) => {
    const {id, correctAnswer, question, options} = quizAns;
    return (
        <div className='mt-4 py-4'>
            {/* <div className='question'>
                <h2 className='text-3xl'>{question}</h2>
            </div>
            <div className='grid grid-cols-2'>
                <p className=''><input type="radio" name='radio'/>{options[0]}</p>
                <p className=''><input type="radio" name='radio' />{options[1]}</p>
                <p className=''><input type="radio" name='radio' />{options[2]}</p>
                <p className=''><input type="radio" name='radio' />{options[3]}</p>
            </div> */}
            
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{question}</h5>
                    <div className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                        <p className='border py-8 m-4 p-8'><input className='mr-8' type="radio" name='radio'/>{options[0]}</p>
                        <p className='border py-8 m-4'><input className='mr-8' type="radio" name='radio' />{options[1]}</p>
                        <p className='border py-8 m-4'><input className='mr-8' type="radio" name='radio' />{options[2]}</p>
                        <p className='border py-8 m-4'><input className='mr-8' type="radio" name='radio' />{options[3]}</p>
                    </div>
            </div>

        </div>
    );
};

export default QuizAns;