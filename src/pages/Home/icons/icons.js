
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function FavoriteIcone() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
    
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
     
    </BottomNavigation>
  );
}
