import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{backgroundColor: '',  padding: '15px', textAlign:"center"}}>
            <h1 style={{color:'red'}}>404!! Page Not Found!!</h1>
            <Link  style={{textDecoration: 'none', color: 'tomato'}}  to="/home"> <Button  color="success" variant="contained">Back To Home Page</Button> </Link>
        </div>
    );
};

export default NotFound;