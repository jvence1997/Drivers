//import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './view/landing/landing'
import Home from './view/home/home'
import Detail from './view/detail/detail'
import Form from './view/form/form'
import About from './view/about/about'

function App() {
  return (
    <div>
      <Routes >
        <Route path='/' Component={Landing} />
        <Route path='/home' Component={Home} />
        <Route path='/home/:id' Component={Detail} />
        <Route path='/create' Component={Form} />
        <Route path='/about' Component={About} />
      </Routes>
    </div>
  )
}

export default App
