//importing stuff
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Support(){
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
                type: 'ADD_SUPPORT',
                payload: value
            })
            //setting value back to 0
            setValue(0);
            //bring you to the next page
            history.push('/questions/comments');
        }
    }

    return(
        <div>
            <Box>
            <h3>How well are you being supported?</h3>

            <TextField id="standard-basic" label="1-5" variant="standard" 
                type='number'
                value={value}
                placeholder='1-5'
                onChange={(event) => { setValue(event.target.value);
                }}
            />
            </Box>
            <Link to='/questions/understanding'><Button variant="outlined">Go back to Understanding</Button></Link>
            <Button variant="outlined" onClick={handleChange}>Submit</Button>
            <Link to='/questions/comments'><Button variant="outlined">Go to Comments</Button></Link>
        </div>
    )
}

export default Support;