import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.only('xs')]: {
        flexDirection: 'column',
        padding: '10px'
      },
      [theme.breakpoints.only('sm')]: {
        flexDirection: 'column',
        padding: '10px'
      },
    },
    title: {
      flexGrow: 1,
      letterSpacing: '0.1em',
      [theme.breakpoints.only('xs')]: {
        borderBottom: '1px solid #ffffff'
      },
      [theme.breakpoints.only('sm')]: {
        borderBottom: '1px solid #ffffff'
      },
    },
    btnContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    myJournal: {
      [theme.breakpoints.only('xs')]: {
        display: 'none'
      },
      [theme.breakpoints.only('sm')]: {
        display: 'none'
      },
    }
}));
