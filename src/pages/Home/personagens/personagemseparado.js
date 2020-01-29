import React, { useState, useEffect } from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import axios from 'axios'
import Personagens from "../cards/index";
import { useParams } from "react-router-dom";
import style from "./style";

export default function PersonagemSeparado () {

    const classes = style();


    const [personagens, setPersonagens] = useState([]);
    const [search, setSearch] = useState('');
    

    let {id} = useParams();

   


    useEffect(() => {
        getByName(search)
        
    }, [search]);
    


    
    const getPerso = async (search) => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters/' + {params: {name: search}})
        setPersonagens(response.data)
    }

    

    return (

    <Container maxWidth="md" style={{ flexDirection: 'row', justifyItems: 'center', textAlign: 'center', display:'flex'}}>


        <TextField onChange={(e) => setSearch(e.target.value)}/>
            <Grid 
                        
            display='flex'
            justify='content'
            container  spacing={2}>
            
            {
                personagens.map((value, index) => (
                <Personagens personagem={value} 
                                        /*mudar={index%2} * funcao que é usada para usar o css apenas no numeros pares */ />
                ))
            }
                            
                                                
                        
                        </Grid>
                        
        
        
                    </Container>


    );

};