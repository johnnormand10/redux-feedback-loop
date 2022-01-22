//importing stuff
import React from 'react';
import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Understanding(){
    //declaring dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();
    //declaring state variable
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        if(value === 0){
            return 
        }
        else{
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: value
            })
        //resetting value to 0
        setValue(0);
        //bring you to the next page
        history.push('/questions/support');
        }
    }

    return(
        <div>
            <Box component="fieldset" borderColor="transparent">
            <h3>How well do you understand the material?</h3>

            <TextField id="standard-basic" label="1-5" variant="standard"
                type='number'
                value={value}
                placeholder='1-5'
                onChange={(event) => setValue(event.target.value)}
            />
            </Box>
            <Link to='/questions/feelings'><Button variant="outlined">Go back to Feelings</Button></Link>
            <Button variant="outlined" onClick={handleChange}>Submit</Button>
            <Link to='/questions/support'><Button variant="outlined">Go to Support</Button></Link>
        </div>
    )
}

export default Understanding;