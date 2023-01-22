import React from 'react';
import './App.css';
import { Typography } from '@mui/material';
import { UploadComponent } from './components/UploadComponent/UploadComponent';

function App() {
  return (
    <div className="App">
        <Typography variant='h1'>
            Welcome to my App
        </Typography>
        <UploadComponent />
    </div>
  );
}

export default App;
