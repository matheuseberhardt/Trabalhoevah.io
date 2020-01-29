// import React, { useState, useEffect } from "react";
// import {  TextField } from "@material-ui/core";
// import axios from 'axios'
// import { useParams } from 'react-router-dom';


// export default function SearchPerson() {

//     const [personagens, setPersonagens] = useState([]);
//     const [search, setSearch] = useState('');
//     const [loading, setLoading] = useState(false);

//     let { name } = useParams();


//     useEffect(() => {
//         getByName(search)

//     }, [search]);

//     const getByName = async (search) => {
//         const response = await axios.get('https://www.breakingbadapi.com/api/characters', { params: { name: search } })
//         console.log(response)
//         setPersonagens(response.data)
//     }

//     const getPerso = async (name) => {
//         const response = await axios.get('https://www.breakingbadapi.com/api/characters/' + name)
//         setPersonagens(response.data)
//     }

  

//     useEffect(() => {
//         setLoading(false)
//     }, [personagens]);

//     return (
 
//          <TextField  max Width="md" style={{justifyItems:'center', textAlign:'center' }} onChange={(e) => setSearch(e.target.value)} />
                    
                    
//     );   
// }