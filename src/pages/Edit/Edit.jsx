import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom'
import SaveIcon from '@material-ui/icons/Save';
import styles from './Edit.module.css'

export const Edit = () => {

    const [stateValue, setStateValue] = useState('')
    let history = useHistory()

    const handleChange = (e, editor) => {
        const data = editor.getData()
        setStateValue(data)
    }

    const save = () => {
        localStorage.setItem('store', stateValue)
        history.push('/')
    }

    return (
        
        <div className={styles.container} >
            <CKEditor 
                editor={ClassicEditor}
                data={localStorage.getItem('store')}
                onChange={handleChange}
            />
            {
                stateValue
                ?
                <button 
                    onClick={save} 
                    className={styles.button}
                >   
                <SaveIcon />Save
                </button>
                : null
            }
        </div>

    )
}
