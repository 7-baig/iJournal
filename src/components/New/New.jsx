import React, { useState, useEffect, useContext } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom'
import { GlobalContext } from '../Context/Context'

const New = () => {
    
    const [stateValue, setStateValue] = useState()
    const [value, setValue] = useContext(GlobalContext)
    let history = useHistory()

    const handleChange = (e, editor) => {
        const data = editor.getData()
        setStateValue(data)
    }

    const save = () => {
        localStorage.setItem('store', stateValue)
        const getValue = localStorage.getItem('store')
        const items = {
            name: getValue
        }
        setValue([...value, items])
        history.push('/')
    }

    return (
        <div>
            <h1>Editor</h1>
            <CKEditor 
                editor={ClassicEditor}
                onChange={handleChange}
            />
            <button onClick={save} >Save</button>

        </div>
    )
}

export default New 