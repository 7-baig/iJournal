import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { useStyles } from './styleHeader'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { Link } from 'react-router-dom'

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.header} >
          <Typography variant="h4" className={classes.title}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} >
            iJournal  
          </Link>
          </Typography>

          <Link to="/read" style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <div className={classes.btnContainer}>
                <ImportContactsIcon style={{ fontSize: '35px', marginRight: '5px' }} />
                <Typography variant="h5" className={classes.myJournal} >
                    My Journal
                </Typography>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
