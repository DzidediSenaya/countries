import React from 'react';
import Navbar from '../components/navbar/navbar';
import { useParams } from 'react-router-dom';

function Country() {
    const params= useParams();

    console.log('params',params);


    return (
        <div>
        <Navbar/>
        <h1>Country's Page</h1>
        </div>
    );
}

export default Country;