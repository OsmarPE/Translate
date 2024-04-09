import React from "react"

function Container({children}:{children:React.ReactNode}) {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-white dark:bg-dark ">{children}</div>
  )
}

export default Container