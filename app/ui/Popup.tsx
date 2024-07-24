import React from 'react'

const Popup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      {children}
    </div>
  )
}

export default Popup
