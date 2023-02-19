import React from 'react';
import { Link } from 'react-router-dom';

const HomeProduct = ({realQuiz}) => {
    const {id, name, logo} = realQuiz;
    return (
        <div className='mt-8 w-full'>
            {/* <img src={logo} alt=""/>
            <div className='flex gap-8 mt-4 items-center justify-between'>
                <h1 className='float-left text-green-600'>{name}</h1>
                <button className='bg-blue-400 w-100 py-4 px-2 rounded ml-52 text-white'>Start Quiz</button>
            </div> */}
            
            <div className ="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                    <img className ="p-8 rounded-t-lg" src={logo}/>
                </Link>
                <div class="px-5 pb-5">
                    <div className ="flex items-center mt-2.5 mb-5">
                    </div>
                    <div className ="flex items-center justify-between">
                        <span className ="text-3xl font-bold text-gray-900 dark:text-white">{name}</span>
                        <button href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Quiz</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeProduct;