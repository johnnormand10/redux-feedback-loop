//importing stuff
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Feelings(){
    //declaring dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        if(value === 0){
            return
        }
        else{
            dispatch({
                type: 'ADD_FEELING',
                payload: value
            })
        //resetting value back to 0
        setValue(0);
        //bring you to the next page
        history.push('/questions/understanding');
        }
    }

    return(
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <h3>How are you feeling?</h3>

            <TextField id="standard-basic" label="1-5" variant="standard"
                type='number'
                value={value}
                placeholder='1-5'
                onChange={(event) => setValue(event.target.value)}
            />
            </Box>
            <Link to='/#/'><Button variant="outlined">Go back to Homepage</Button></Link>
            <Button variant="outlined" onClick={handleChange}>Submit</Button>
            <Link to='/questions/understanding'><Button variant="outlined">Go To Understanding</Button></Link>
        </div>
    )
}

export default Feelings;