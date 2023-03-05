import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomeProduct.css';

const HomeProduct = ({realQuiz}) => {
    const {id, name, logo} = realQuiz;

    // Start Quiz button click work
    const navigate = useNavigate();
    
    const handlerNAvigate = () => {
        navigate(`/realQuiz/${id}`);
    }
    return (
        <div className='mt-8 lg:container md:mx-auto'>
            <div className ="w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link>
                    <img className ="p-8 rounded w-60 h-60 mx-auto bg-gray-400 mt-2" src={logo} alt="This is logo"/>
                </Link>
                <div class="px-5 pb-5">
                    <div className ="flex items-center mt-2.5 mb-5">
                        
                    </div>
                    <div className ="flex items-center justify-between">
                        <span className ="text-3xl font-bold text-gray-900 dark:text-white">{name}</span>
                        <button onClick={handlerNAvigate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Quiz</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeProduct;