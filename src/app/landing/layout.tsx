import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className="md:mx-16">
      {children}
    </div>
    </>
  )
}

export default layout