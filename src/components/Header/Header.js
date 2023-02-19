import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <header class="bg-green-400 bg-opacity-75 text-white shadow-lg hidden md:block">
                <div class="container mx-auto flex items-center h-24">
                    <Link to="" class="flex items-center justify-center">
                    <img class="h-16" src="https://team-creative.net/static/media/teamcreative.a00ef5cc.png" alt="" />
                    <span class="ml-4 uppercase font-black"><br/></span>
                    </Link>
                    <nav class="contents font-semibold text-base lg:text-lg">
                    <ul class="mx-auto flex items-center">
                        <li class="p-5 xl:p-8 active">
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                        </li>
                        <li class="p-5 xl:p-8">
                        <Link to="quiz">
                            <span>Quiz</span>
                        </Link>
                        </li>
                        <li class="p-5 xl:p-8">
                        <Link to="projects">
                            <span>Projects</span>
                        </Link>
                        </li>
                        <li class="p-5 xl:p-8">
                        <Link to="/tutorials">
                            <span>Tutorials</span>
                        </Link>
                        </li>
                        <li class="p-5 xl:p-8">
                        <Link to="/answer">
                            <span>Answer</span>
                        </Link>
                        </li>
                    </ul>
                    </nav>
                    <button class="border border-white rounded-full font-bold px-8 py-2">Contact me</button>
                </div>
            </header>
        </div>
    );
};

export default Header;