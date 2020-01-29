import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Button from "@material-ui/core/Button";

import { Badge } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import Drawer from "./Drawer/drawer";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Drawer/>
          <Button variant="h6" color="inherit" href="/">
            Empresa
          </Button>

          

          <Button href="/login"> login</Button>
          <Badge badgeContent={4} color="error">
  <MailIcon />
</Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}
