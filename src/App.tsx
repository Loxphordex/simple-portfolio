import React from 'react'
import Header from './Header/Header'
import ProjectList from './Project/ProjectList'
import Footer from './Footer/Footer'
import './scheme.scss'
import './fade-in.scss'

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
 