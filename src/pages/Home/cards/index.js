import React from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcone from '../icons/icons';

import style from "./style";

export default function Personagens({ personagem /*mudar*/ }) {
  const classes = style();

  

  return (
    <Grid item xs={6} lg={3}>
      <Card>
        <CardMedia
          className={classes.media}
          image={personagem.img}
          title={personagem.name}
          /*className={mudar ? classes.img: {}}*/
        />
        <CardContent>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <h5 className={classes.title}>{personagem.name}</h5>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography></Typography>
            </ExpansionPanelDetails>

            <h4>{personagem.nickname}</h4>
            <h4>{personagem.portrayed}</h4>
            <h6>{personagem.birthday}</h6>
            <h6>{personagem.ocupation}</h6>
            <h6>{personagem.aparence}</h6>
            <h6>{personagem.status}</h6>
            
          </ExpansionPanel>
        
         
        </CardContent>
      </Card>
    </Grid>
  );
}
