import React, { useState, useEffect } from "react";
import { Container, Grid, TextField, Modal } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";
import axios from 'axios'
import Personagens from "./Cards";
import { useParams } from 'react-router-dom';


export default function Teste() {

    const [personagens, setPersonagens] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    let { name } = useParams();

    useEffect(() => {
        setLoading(true)
        if (name) getPerso(name)
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
       

            <Container maxWidth="md" style={{ justifyItems: 'center', textAlign: 'center', display: 'flex' }}>



                <TextField onChange={(e) => setSearch(e.target.value)} />
                <Grid container direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    
                        
                            {
                                personagens.map((value, index) => (
                                    <Personagens personagem={value} />
                                ))
                            }
                        </Grid>
                    </Container>
    );
               }