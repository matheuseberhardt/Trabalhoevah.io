import React from "react";
import { Container, Grid } from '@material-ui/core';
import Styles from './styles';




export default function Footer() {

    const classes = Styles();

    return (
        <div className='footer'>
        <footer className={classes.footer}>
            <Grid 
                container
                direction='grow'
                justify='content'
                container className={classes.root} spacing={2}>
                    

                <Grid item sm={4}>
                    <h2>Empresa </h2>
                    <h2>Vendas </h2>
                    <h2>Telefones</h2>
                </Grid>

                <Grid item sm={4}>
                    <h2>Produtos</h2>
                    <h2>Suporte </h2>
                    <h2>Trabalhe Conosco</h2>
                </Grid>
        
                <Grid item sm={4}>
                    <h2>Empresa</h2> </Grid>
                    
                <Grid item sm={4}><h2>Todos os direitos reservados</h2></Grid>
                    
                <Grid item sm={4}><h2>Marca</h2></Grid>
                <Grid item sm={4}> <h2>Valores</h2></Grid>
               
               
      

            </Grid>


        </footer>

    </div>    



    )

}



