//importing stuff
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
//material ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Comment(){
    //declaring dispatch and history
    const dispatch = useDispatch();
    const history = useHistory();
    //declaring state variables
    const [comment, setComment] = useState(null);

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comment
        })
        //resetting the value of comment
        setComment(null);
        //bring you to the next page
        history.push('/questions/review');
    }

    return(
        <div>
            <Box>
            <h3>Would you like to leave any comments?</h3>

            <TextField id="standard-basic" label="Type Here" variant="standard" 
                type='text'
                placeholder='Comment Here'
                onChange={(event) => setComment(event.target.value)}
            />
            </Box>
            <Link to='/questions/support'><Button variant="outlined">Go back to Support</Button></Link>
            <Button variant="outlined" onClick={handleChange}>Submit</Button>
            <Link to='/questions/review'><Button variant="outlined">Go to Review</Button></Link>
        </div>
    )
}

export default Comment;