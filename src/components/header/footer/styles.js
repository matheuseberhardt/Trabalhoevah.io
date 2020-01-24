import { makeStyles } from "@material-ui/core";



const Styles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    
  }));

  export default Styles;
  
