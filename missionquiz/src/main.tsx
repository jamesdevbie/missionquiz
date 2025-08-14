import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Category from './Components/Category/Category.tsx'
import Home from './Pages/Home/Home.tsx'
import Question from './Components/Question/Question.tsx'

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
        path: '/:optionId/set1',
        element: <Question />,
      },
      {
        path: '/:optionId/set2',
        element: <Question />,
      },
      {
        path: '/:optionId/set3',
        element: <Question />,
      },
      {
        path: '/:optionId/set4',
        element: <Question />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={appRouter} />
  </>
)
