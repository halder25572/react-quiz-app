import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeProduct from '../HomeProduct/HomeProduct';

const Home = () => {
    const coolQuiz = useLoaderData();
    // console.log(coolQuiz);
    console.log(coolQuiz.data[0]);
    return (
        <div className='w-100 container mx-auto gap-4'>
            <div className="my-4">
                <h1 className='md:text-5xl font-bold'>Online Programming Quiz</h1>
                <p className='mt-4 md:text-1xl'>Computer programming is the process of writing code to facilitate specific actions in a computer, application or software program, and instructs them on how to perform.
                </p>
            </div>
            <div className='md:flex md:items-end'>
                {
                    coolQuiz.data.map(realQuiz => <HomeProduct realQuiz={realQuiz} key={realQuiz.id}></HomeProduct>)
                }
            </div>
        </div>
    );
};

export default Home;