import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Tutorials from './components/Tutorials/Tutorials';
import Answer from './components/Answer/Answer';
import Projects from './components/Projects/Projects';
import QuizDetails from './components/QuizDetails/QuizDetails';
import CorrectAns from './components/CorrectAns/CorrectAns';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, children: [
        {
          path: '/',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        // Start Quiz Button Work Here
        {
          path: '/realQuiz/:realQuiz',
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.realQuiz}`),
          element : <QuizDetails></QuizDetails>
        },
        // End Quiz Button Work Here
        // {
        //   path: '/correctAns/:correctAns',
        //     loader : () => fetch()
        //   element : <CorrectAns></CorrectAns>
        // },
        {
          path: '/quiz',
          element: <Quiz></Quiz>
        },
        {
          path: '/tutorials',
          element: <Tutorials></Tutorials>
        },
        {
          path: '/answer',
          element: <Answer></Answer>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
      ]
    },
    {
      path: '*',
      element: <div className='text-5xl text-red-500'>Page Not Found</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
