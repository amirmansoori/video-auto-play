import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

type Props = { children: React.ReactNode }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
