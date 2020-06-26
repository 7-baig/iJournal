import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import journal from '../../images/journal.png'
import styles from './Home.module.css'
import { Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Home = () => {

    let history = useHistory()

    return (
        <div className={styles.container} >

                <div className={styles.upperContainer} >
                    <h2 className={styles.about} >
                        <strong>iJournal</strong> is a free online diary and personal journal focused on privacy. Easily keep a secret diary or a private journal of notes and ideas securely on the web.
                    </h2>

                    <img src={journal} className={styles.image} />
                </div>

                <footer className={styles.footer}>
                    <AddCircleOutlineIcon
                        onClick={() => (
                            history.push('/new')
                        )}
                        style={{fontSize: '60px', color: 'azure', cursor: 'pointer'}}
                    >
                    </AddCircleOutlineIcon>    
                </footer>

        </div>
    )
}

export default Home