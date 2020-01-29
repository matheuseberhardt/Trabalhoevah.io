import React, { useState, useEffect } from "react";
import { Container, Grid, TextField } from "@material-ui/core";
import axios from 'axios'
import Personagens from "../cards/index";
import { useParams } from "react-router-dom";



export default function Cards() {

    const [personagens, setPersonagens] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    let {name} = useParams();


    useEffect(() => {
        setLoading(true)
        if (name ) getPerso(name)
        else getPersonagens()
    }, []);

    useEffect(() => {
        getByName(search)
        
    }, [search]);


    const getByName = async (search) => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters', { params: { name: search } })
        console.log(response)
        setPersonagens(response.data)
    }

    const getPerso = async (name) => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters/' + name)
        setPersonagens(response.data)
    }

    const getPersonagens = async () => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters/')
        setPersonagens(response.data)
    }

    useEffect(() => {
        setLoading(false)
    }, [personagens]);

    return (
        <main>

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
        </main>
    );
}