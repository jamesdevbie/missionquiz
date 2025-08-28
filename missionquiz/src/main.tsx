import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Category from './Components/Category/Category.tsx'
import Home from './Pages/Home/Home.tsx'
import Questions from './Components/Questions/Questions.tsx'
import Result from './Components/Result/Result.tsx'
import './index.css'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:optionId',
        element: <Category />,
      },
      {
        path: '/result',
        element: <Result />,
      },
      {
        path: '/:optionId/:setId',
        element: <Questions />,
      },
      {
        path: '/:optionId/:setId',
        element: <Questions />,
      },
      {
        path: '/:optionId/:setId',
        element: <Questions />,
      },
      {
        path: '/:optionId/:setId',
        element: <Questions />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={appRouter} />
  </>
)
