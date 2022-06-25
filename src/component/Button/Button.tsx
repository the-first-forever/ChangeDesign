import React, {} from 'react'

const App: React.FC<{
  children: string | React.ReactNode
}> = props => {
  const { children } = props
  return <button>{children}</button>;
}

export default App
