import React from 'react'
import styles from './style'
import Nav from './nav'
import Home from './home'
import Home2 from "./home2"
import Home3 from "./home3"
import Home4 from "./home4"
import Footer from './footer'


const App = () => {
  return (
    <div >
      < Nav />
      < Home />
      < Home2 />
      < Home3 name="It's free" content='No credit card required'/>
      < Home4  name ="Ready? Let's play." />
      < Footer />
    </div>
  )
}

export default App      