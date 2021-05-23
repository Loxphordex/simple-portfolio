import React from 'react'
import Header from './Header/Header'
import ProjectList from './Project/ProjectList'
import Footer from './Footer/Footer'
import './scheme.scss'
import './animation/fade-in.scss'
import './animation/open-and-close.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <ProjectList />
      <Footer />
    </div>
  )
}

export default App
 