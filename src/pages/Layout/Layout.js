import React from 'react'
import Navber from '../shaired/Navber'
import Footer from '../shaired/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navber />
        {children}
        <Footer />
    </div>
  )
}

export default Layout