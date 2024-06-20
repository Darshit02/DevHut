import Navigation from '@/components/landing-page/navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default layout