import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexrow: 1,
  },
  menuButton: {
    [theme.breakpoints.only('xs')]: {
        marginRight: theme.spacing(0),
    },
    marginRight: theme.spacing(2),
  },
  card: {
      maxWidth: 200,
      
      
    },
  media: {
      height: 140,
      width: 200,
      padding: 5,
      borderRadius: 5,
    },
    title: {
      
    },
    
}));



export default useStyles;