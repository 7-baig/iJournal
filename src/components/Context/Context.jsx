import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [value, setValue] = useState([])

    return (
        <GlobalContext.Provider value={[value, setValue]} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider