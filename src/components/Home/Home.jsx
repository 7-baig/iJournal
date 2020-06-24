import React, { useContext } from 'react'
import { Link, Route } from 'react-router-dom'
import { GlobalContext } from '../Context/Context'
import ReactHtmlParser from 'react-html-parser';


const Home = () => {

    const [value, setValue] = useContext(GlobalContext)
    console.log(localStorage.getItem('store'))
    const storage = localStorage.getItem('store')
    
    return (
        <div>
            <Route><Link to="/new" ><button>New</button></Link></Route>
            <h1>{ReactHtmlParser(storage)}</h1>
        </div>
    )
}

export default Home