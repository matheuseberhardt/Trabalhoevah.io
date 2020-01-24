import React from "react";
import { Container, Grid } from '@material-ui/core';
import Styles from './styles';


export default function Footer() {

    const classes = Styles();

    return (
        <Container maxWidth="sm">
            <Grid 
            container
            Styles={{TextAlign:'center'}}
            direction='row'
            justify='content'
            container className={classes.root} spacing={2}>
                <Grid item sm={4}>Empresa 0000</Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item sm={4}>Todos os direitos reservados</Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
                <Grid item sm={4}>Marca</Grid>
            </Grid>
           

            </Container>
            


            )

}
        
        
        
