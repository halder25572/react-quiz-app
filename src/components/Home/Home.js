import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeProduct from '../HomeProduct/HomeProduct';

const Home = () => {
    const coolQuiz = useLoaderData();
    // console.log(coolQuiz);
    console.log(coolQuiz.data[0]);
    return (
        <div className='w-100 ml-8'>
            <h1>This is home</h1>
            <div className='flex'>
                {
                    coolQuiz.data.map(realQuiz => <HomeProduct realQuiz={realQuiz} key={realQuiz.id}></HomeProduct>)
                }
            </div>
        </div>
    );
};

export default Home;