import { makeStyles } from "@material-ui/core";





const Styles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      marginTop: 'auto',
      width: '100%',
      marginTop: theme.spacing(8),
      backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        
      },
    paper: {
      height: 140,
      
    },
    control: {
      padding: theme.spacing(2),
      
    },
    
    footer: {
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
    
  }));

  

  export default Styles;
  
