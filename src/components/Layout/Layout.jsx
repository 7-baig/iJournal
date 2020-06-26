import React from 'react'
import { Header } from '../Header/Header'

export const Layout = ({ children }) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        minHeight: '100vh'    
    }

    return (
        <div style={style} >
            <Header />
            { children }
        </div>
    )
}
