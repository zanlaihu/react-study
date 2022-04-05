import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import About from './pages/about'
import { Home } from './pages/home'

const About = React.lazy(() => import('./pages/about/index'))

// const About = lazy(
//   async () =>
//     import(
//       /* webpackChunkname: 'KYCgettingStarted' */ './pages/about/index'
//     ),
// );

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='about'
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default App
