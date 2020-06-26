import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom'
import styles from './New.module.css'
import SaveIcon from '@material-ui/icons/Save';

const New = () => {
    
    const [stateValue, setStateValue] = useState()
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
                onChange={handleChange}
                style={{width: '70px'}}
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

export default New 