import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

type Props = { children: React.ReactNode }

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex flex-col gap-8">
      <Header />
      <main className="px-4 py-28">{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
