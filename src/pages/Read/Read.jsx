import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import styles from './Read.module.css'
import { useHistory } from 'react-router-dom'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


export const Read = () => {
    const notes = localStorage.getItem('store')
    let history = useHistory()
    const [isClicked, setIsClicked] = useState(false)

    return (

        notes
        ?
        <div className={styles.container} >
            {
                ReactHtmlParser(notes)
            }
            {
                notes && !isClicked
                ?
                <>
                    <DeleteIcon
                        onClick={() => (
                            setIsClicked(true),
                            localStorage.removeItem('store')
                            )} 
                        style={{ fontSize: '30px', cursor: 'pointer', marginTop: '5px', color: 'red' }}
                    >
                    </DeleteIcon>

                    <EditIcon
                        onClick={() => (
                            history.push('/edit')
                        )}
                        style={{ fontSize: '30px', cursor: 'pointer', marginTop: '5px', color: '#3f51b5' }}
                    >
                    Edit
                    </EditIcon>
                </>
                :
                null
            }
        </div>
        :
        <h1 className={styles.empty} >
            Your Journal is empty.
            <SentimentVeryDissatisfiedIcon style={{ fontSize: '50px' }} />
        </h1>
    )
}
